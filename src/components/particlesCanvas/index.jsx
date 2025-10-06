import React, { useEffect, useRef } from "react";
import style from "./index.module.scss"


const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const appRef = useRef({});

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const app = appRef.current;
    app.canvas = canvas;
    app.ctx = ctx;
    app.width = window.innerWidth;
    app.height = window.innerHeight;
    app.canvas.width = app.width;
    app.canvas.height = app.height;
    app.dataToImageRatio = Math.max(app.width, app.height) / 1000;

    ctx.globalCompositeOperation = "darker";
    ctx.imageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;

    app.xC = app.width / 2;
    app.yC = app.height / 2;

    // Particle system properties
    app.lifespan = 300;
    app.popPerBirth = 5;
    app.maxPop = 1500;
    app.birthFreq = 1;

    const Utils = {
      segmentAngleRad: (Xstart, Ystart, Xtarget, Ytarget, realOrWeb) => {
        let result;
        if (Xstart === Xtarget) {
          if (Ystart === Ytarget) {
            result = 0;
          } else if (Ystart < Ytarget) {
            result = Math.PI / 2;
          } else if (Ystart > Ytarget) {
            result = (3 * Math.PI) / 2;
          }
        } else if (Xstart < Xtarget) {
          result = Math.atan((Ytarget - Ystart) / (Xtarget - Xstart));
        } else {
          result = Math.PI + Math.atan((Ytarget - Ystart) / (Xtarget - Xstart));
        }

        result = (result + 2 * Math.PI) % (2 * Math.PI);

        if (!realOrWeb) {
          result = 2 * Math.PI - result;
        }
        return result;
      },
    };

    app.dataXYtoCanvasXY = function (x, y) {
      const zoom = 0.72;
      const xx = this.xC + x * zoom * this.dataToImageRatio;
      const yy = this.yC + y * zoom * this.dataToImageRatio;
      return { x: xx, y: yy };
    };

    app.initDraw = function () {
      ctx.clearRect(0, 0, this.width, this.height);
      ctx.beginPath();
      ctx.rect(0, 0, this.width, this.height);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
    };

    app.birth = function () {
      const x = -800 + 1600 * Math.random();
      const y = -800 + 1600 * Math.random();
      const particle = {
        hue: 195 + 3 * Math.floor(3 * Math.random()),
        sat: 65 + 30 * Math.random(),
        lum: 15 + Math.floor(50 * Math.random()),
        x,
        y,
        xLast: x,
        yLast: y,
        xSpeed: 0,
        ySpeed: 0,
        age: 0,
        name: "seed-" + Math.ceil(10000000 * Math.random()),
      };
      this.particles.push(particle);
    };

    app.kill = function (deadName) {
      this.particles = this.particles.filter((p) => p.name !== deadName);
    };

    app.move = function () {
      for (let i = 0; i < this.particles.length; i++) {
        let p = this.particles[i];
        p.xLast = p.x;
        p.yLast = p.y;
        p.xSpeed = 0;
        p.ySpeed = 0;

        const eddies = [];
        const baseK = 7;
        eddies.push({ x: -300, y: -300, K: 10 * baseK, r0: 180 });
        eddies.push({ x: 300, y: -300, K: 15 * baseK, r0: 150 });
        eddies.push({ x: 300, y: 300, K: 10 * baseK, r0: 250 });
        eddies.push({ x: -300, y: 300, K: 15 * baseK, r0: 150 });
        eddies.push({ x: 0, y: 0, K: 5 * baseK, r0: 20 });

        for (let e = 0; e < eddies.length; e++) {
          const eddy = eddies[e];
          const dx = p.x - eddy.x;
          const dy = p.y - eddy.y;
          const r = Math.sqrt(dx * dx + dy * dy);
          const theta = Utils.segmentAngleRad(0, 0, dx, dy, true);
          const cos = Math.cos(theta);
          const sin = Math.sin(theta);
          const K = eddy.K;
          const r0 = eddy.r0;

          const er = { x: cos, y: sin };
          const eO = { x: -sin, y: cos };

          const radialVelocity = -0.003 * K * Math.abs(dx * dy) / 3000;
          const sigma = 100;
          const azimutalVelocity = K * Math.exp(-Math.pow((r - r0) / sigma, 2));

          p.xSpeed += radialVelocity * er.x + azimutalVelocity * eO.x;
          p.ySpeed += radialVelocity * er.y + azimutalVelocity * eO.y;
        }

        const visc = 1;
        p.xSpeed *= visc;
        p.ySpeed *= visc;
        p.speed = Math.sqrt(p.xSpeed ** 2 + p.ySpeed ** 2);
        p.x += 0.1 * p.xSpeed;
        p.y += 0.1 * p.ySpeed;
        p.age++;

        if (p.age > this.lifespan) {
          this.kill(p.name);
          this.deathCount++;
        }
      }
    };

    app.draw = function () {
      this.drawnInLastFrame = 0;
      if (!this.particles.length) return;

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        let h = p.hue;
        let s = p.sat;
        let l = p.lum;
        let a = 0.3 + p.speed / 400;

        const last = this.dataXYtoCanvasXY(p.xLast, p.yLast);
        const now = this.dataXYtoCanvasXY(p.x, p.y);

        ctx.beginPath();
        ctx.strokeStyle = `hsla(${h}, ${s}%, ${l}%, ${a})`;
        ctx.moveTo(last.x, last.y);
        ctx.lineTo(now.x, now.y);
        const size = 0.4 * (3 - (4 * p.age) / 500);
        ctx.lineWidth = 1 * size * this.dataToImageRatio;
        ctx.stroke();
        ctx.closePath();

        this.drawnInLastFrame++;
      }
    };

    app.start = function () {
      this.stepCount = 0;
      this.particles = [];
      this.drawnInLastFrame = 0;
      this.deathCount = 0;
      this.initDraw();
    };

    app.evolve = function () {
      this.stepCount++;
      if (
        this.stepCount % this.birthFreq === 0 &&
        this.particles.length + this.popPerBirth < this.maxPop
      ) {
        for (let n = 0; n < this.popPerBirth; n++) {
          this.birth();
        }
      }
      this.move();
      this.draw();
    };

    app.start();

    let animationId;
    const frame = () => {
      app.evolve();
      animationId = requestAnimationFrame(frame);
    };
    frame();

    // Cleanup on unmount
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100vw",
        height: "100vh",
        background: "white",
        position: "fixed",
        zIndex: -1,
      }}
    />
  );
};

export default ParticleCanvas;

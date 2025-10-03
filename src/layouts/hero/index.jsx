import React from 'react'
import style from "./index.module.scss"
import Person from "../../assets/person.png"

function Hero() {

  return (
    <div className={style.hero}>
      <div className={style.imgBox}>
        <img src={Person} alt="Loading..." />
      </div>

      <div className={style.titleBox}>
        <h2 className={style.subtitle}>Hello! I'm a</h2>
        <span className={style.title}></span>
        <h2 className={style.subtitle}>Developer</h2>
      </div>
    </div>
  )
}

export default Hero
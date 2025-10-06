import React from 'react'
import style from "./index.module.scss"

function SkillsSection() {
  return (
    <div className={style.skills}>
      <span className={style.skillBlock}>HTML</span>
      <span className={style.skillBlock}>CSS</span>
      <span className={style.skillBlock}>Javascript</span>
      <span className={style.skillBlock}>Typescript</span>
      <span className={style.skillBlock}>React</span>
      <span className={style.skillBlock}>React Native</span>
      <span className={style.skillBlock}>Redux</span>
      <span className={style.skillBlock}>Tailwind CSS</span>
      <span className={style.skillBlock}>Responsive Design</span>
      <span className={style.skillBlock}>Node.js</span>
      <span className={style.skillBlock}>Express.js</span>
      <span className={style.skillBlock}>Elysia.js</span>
      <span className={style.skillBlock}>MongoDB</span>
      <span className={style.skillBlock}>PostgreSQL</span>
      <span className={style.skillBlock}>Prisma-ORM</span>
      <span className={style.skillBlock}>Drizzle-ORM</span>
      <span className={style.skillBlock}>Git/GitHub</span>
      <span className={style.skillBlock}>Postman</span>
      <span className={style.skillBlock}>VS Code</span>
      <span className={style.skillBlock}>Agile/Scrum Methodologies</span>
      <span className={style.skillBlock}>Team Collaboration</span>
    </div>
  )
}

export default SkillsSection
import React from 'react'
import style from "./index.module.scss"
import BioItem from '../../components/bioItem'

function Biography() {
  return (
    <div className={style.biography}>
      <p className={style.text}>
        I'm a passionate full-stack and mobile developer with 1 year of experience building modern, high-quality web and mobile applications. I specialize in creating pixel-perfect user interfaces, developing efficient backend systems, and delivering seamless end-to-end solutions. I enjoy turning ideas into functional products that are fast, responsive, and visually engaging.
      </p>

      <div className={style.bioBox}>
        <BioItem title="Name" content="John Doe" />
        <BioItem title="Languages" content="Azerbaijani English Turkish" />
        <BioItem title="Name" content="John Doe" />
        <BioItem title="Name" content="John Doe" />
      </div>
    </div>
  )
}

export default Biography
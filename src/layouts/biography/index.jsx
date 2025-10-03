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
        <BioItem title="Name" content="Mammadtaghi Aliyev" />
        <BioItem title="Birthday" content="May 4, 2004" />
        <BioItem title="Age" content="21 years" />
        <BioItem title="Languages" content="Azerbaijani English Turkish" />
        <BioItem title="Nationality" content="Azerbaijani" />
        <BioItem title="Adress" content="Baku, Azerbaijan" />
        <BioItem title="Phone" content="(+994) 55 990 2853" />
        <BioItem title="Email" content="mammadtaghialiyev@gmail.com" />
        <BioItem title="Telegram" content="@mammadtaghi" />
      </div>
    </div>
  )
}

export default Biography
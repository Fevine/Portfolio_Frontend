import React from 'react'
import style from "./index.module.scss"
import Person from "../../assets/person.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function HomeSideBar() {
  return (
    <div className={style.sideBar}>
      <div className={style.imgBox}>
        <img src={Person} alt="Loading..." />
      </div>

      <h2 className={style.fullName}>
        <span className={style.name}>Mammadtaghi </span>
        <span className={style.surname}>Aliyev</span>
      </h2>

      <p className={style.summary}>
        <span>I'm a passionate front-end web developer who excels at creating pixel-perfect web interfaces. I’m available for a freelance job. </span>
        <a className={style.link} href="#contact">Hire me</a>
      </p>

      <div className={style.contactBox}>

        <div className={style.contact}>
          <LocationOnIcon className={style.icon} />
          <span>Azerbaijan, Baku</span>
        </div>

        <div className={style.contact}>
          <PhoneIcon className={style.icon} />
          <span>(+994) 55 990 2853</span>
        </div>

        <div className={style.contact}>
          <EmailIcon className={style.icon} />
          <span>mammadtaghialiyev@gmail.com</span>
        </div>

      </div>

      <div className={style.linkBox}>

        <a className={style.link} href="https://www.linkedin.com/in/mammadtaghi-aliyev/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className={style.linkIcon} />
        </a>

        <a className={style.link} href={"https://t.me/mammadtaghi"} target="_blank" rel="noopener noreferrer">
          <TelegramIcon className={style.linkIcon} />
        </a>

        <a className={style.link} href="https://www.instagram.com/memmedtaghi8/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className={style.linkIcon} />
        </a>

        <a className={style.link} href="https://github.com/Fevine" target="_blank" rel="noopener noreferrer">
          <GitHubIcon className={style.linkIcon} />
        </a>
      </div>
    </div>
  )
}

export default HomeSideBar

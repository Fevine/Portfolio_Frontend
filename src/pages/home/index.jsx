import React from 'react'
import style from "./index.module.scss"
import HomeSideBar from '../../layouts/sideBar'
import Hero from '../../layouts/hero'

function Home() {
  return (
    <div className={style.home}>
      <HomeSideBar />
      <div className={style.content}>
        <Hero />
      </div>
    </div>
  )
}

export default Home

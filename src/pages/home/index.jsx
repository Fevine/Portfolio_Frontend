import React from 'react'
import style from "./index.module.scss"
import HomeSideBar from '../../layouts/sideBar'

function Home() {
  return (
    <div className={style.home}>
      <HomeSideBar />
      <div className={style.content}>
        Home Page Content
      </div>
    </div>
  )
}

export default Home

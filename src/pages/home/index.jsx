import React from 'react'
import style from "./index.module.scss"
import HomeSideBar from '../../layouts/sideBar'
import Hero from '../../layouts/hero'
import SectionHolder from '../../components/sectionHolder'
import Biography from '../../layouts/biography'

function Home() {
  return (
    <div className={style.home}>
      <HomeSideBar />
      <div className={style.content}>
        <Hero />
        <SectionHolder title="Biography" >
          <Biography />
        </SectionHolder>
      </div>
    </div>
  )
}

export default Home

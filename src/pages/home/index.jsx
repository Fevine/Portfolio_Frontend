import React from 'react'
import style from "./index.module.scss"
import HomeSideBar from '../../layouts/sideBar'
import Hero from '../../layouts/hero'
import SectionHolder from '../../components/sectionHolder'

function Home() {
  return (
    <div className={style.home}>
      <HomeSideBar />
      <div className={style.content}>
        <Hero />
        <SectionHolder title="Biography" >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, maxime?
        </SectionHolder>
      </div>
    </div>
  )
}

export default Home

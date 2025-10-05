import React from 'react'
import style from "./index.module.scss"
import HomeSideBar from '../../layouts/sideBar'
import Hero from '../../layouts/hero'
import SectionHolder from '../../components/sectionHolder'
import Biography from '../../layouts/biography'
import ExCard from '../../components/exCard'

function Home() {
  return (
    <div className={style.home}>
      <HomeSideBar />
      <div className={style.content}>
        <Hero />
        <SectionHolder title="Biography" >
          <Biography />
        </SectionHolder>
        <SectionHolder title="Experience" >
          <ExCard
            role={"Front-end Developer"}
            organization={"Tech Solutions Inc."}
            period={"Jan 2020 - Present"}
          >
            Worked on developing and maintaining the user interface of web applications using HTML, CSS, and JavaScript. Collaborated with designers to implement responsive designs and ensure cross-browser compatibility.
          </ExCard>
          <ExCard
            role={"Web Developer Intern"}
            organization={"WebWorks Agency"}
            period={"Jun 2019 - Dec 2019"}
          >
            Assisted in the development of client websites, focusing on front-end tasks such as creating interactive elements and optimizing page load times. Gained experience in using version control systems like Git.
          </ExCard>
        </SectionHolder>
        <SectionHolder title="Professionality" >
        </SectionHolder>
        <SectionHolder title="Education" >
        </SectionHolder>
        <SectionHolder title="Contact" >
        </SectionHolder>
      </div>
    </div>
  )
}

export default Home

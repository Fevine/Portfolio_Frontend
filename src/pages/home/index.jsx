import React from 'react'
import style from "./index.module.scss"
import HomeSideBar from '../../layouts/sideBar'
import Hero from '../../layouts/hero'
import SectionHolder from '../../components/sectionHolder'
import Biography from '../../layouts/biography'
import ExCard from '../../components/exCard'
import Contact from '../../layouts/contact'

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
            organization={"NMRHIS"}
            period={"Sep 2024 - Jan 2024"}
          >
            Worked on developing and maintaining the user interface of web applications using HTML, CSS, and JavaScript. Collaborated with designers to implement responsive designs and ensure cross-browser compatibility.
          </ExCard>
        </SectionHolder>
        <SectionHolder title="Skills" >
        </SectionHolder>
        <SectionHolder title="Education" >
          <ExCard
            role={"Master of Science in Cybersecurity"}
            organization={"Azerbaijan Architectural and Construction University"}
            period={"2025 - now"}
          >
            Relevant Coursework: Network Security, Cryptography, Ethical Hacking, Information Security Management, Digital Forensics.
          </ExCard>
          <ExCard
            role={"Bachelor of Science in Computer Science"}
            organization={"Azerbaijan Technical University"}
            period={"2021 - 2025"}
          >
            Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management, Software Engineering.
          </ExCard>
        </SectionHolder>
        <SectionHolder title="Contact" >
          <Contact />
        </SectionHolder>
      </div>
    </div>
  )
}

export default Home

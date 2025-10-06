import React from 'react'
import style from "./index.module.scss"
import HomeSideBar from '../../layouts/sideBar'
import Hero from '../../layouts/hero'
import SectionHolder from '../../components/sectionHolder'
import Biography from '../../layouts/biography'
import ExCard from '../../components/exCard'
import Contact from '../../layouts/contact'
import SkillsSection from '../../layouts/skills'

function Home() {
  return (
    <div className={style.home}>
      <HomeSideBar />
      <div className={style.content}>
        <Hero />

        {/* Biography Section */}
        <SectionHolder title="Biography" >
          <Biography />
        </SectionHolder>
        {/* Biography Section */}

        {/* Experience Section */}
        <SectionHolder title="Experience" >
          <ExCard
            role={"Front-end Developer"}
            organization={"NMRHIS"}
            period={"Sep 2024 - Jan 2024"}
          >
            Worked on developing and maintaining the user interface of web applications using HTML, CSS, and JavaScript. Collaborated with designers to implement responsive designs and ensure cross-browser compatibility.
          </ExCard>
        </SectionHolder>
        {/* Experience Section */}

        {/* Skills Section */}
        <SectionHolder title="Skills" >
          <SkillsSection />
        </SectionHolder>
        {/* Skills Section */}

        {/* Education Section */}
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
        {/* Education Section */}

        {/* Contact Section */}
        <SectionHolder title="Contact" >
          <Contact />
        </SectionHolder>
        {/* Contact Section */}
      </div>
    </div>
  )
}

export default Home

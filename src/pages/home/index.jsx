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
            url='https://fermenta-lab.com/'
            role={"Front-end Developer"}
            organization={"Fermenta-Lab"}
            period={"Oct 2025 - Dec 2025"}
          >
            To create a multi-lingual (English, Azerbaijani, Russian), responsive frontend for a wellness brand that showcases fermented products like “Share® Original Basic Fruit” and “Share Pomelozzini®.” The site needed to communicate traditional Chinese wisdom, modern wellness, and product trust – all while being visually clean, easy to navigate, and product-focused.
          </ExCard>
          <ExCard
            url='https://caspian-ps.com/'
            role={"Front-end Developer"}
            organization={"Caspian-PS"}
            period={"May 2025 - July 2025"}
          >
            Caspian-PS is a corporate website developed for an oil and gas company to present its organizational profile, services, and industry expertise. The project focuses on delivering a clean, professional, and responsive user interface that reflects corporate identity and reliability. The frontend was built using a component-based architecture to ensure scalability, maintainability, and consistent design across all pages. Special attention was given to responsive layout, structured navigation, and performance optimization to provide a smooth user experience across multiple devices.
          </ExCard>
          <ExCard
            url='https://www.nmrhis.az/'
            role={"Front-end Developer"}
            organization={"NMRHIS"}
            period={"Sep 2024 - Jan 2024"}
          >
            Worked on developing and maintaining the user interface of web applications using React. Collaborated with designers to implement responsive designs and ensure cross-browser compatibility.
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

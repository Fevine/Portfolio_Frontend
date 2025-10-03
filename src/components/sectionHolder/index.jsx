import React from 'react'
import style from "./index.module.scss"

function SectionHolder({ children, title }) {
  return (
    <div className={style.sectionHolder}>
      <h2 className={style.title}>
        {title}
      </h2>
      {children}
    </div>
  )
}

export default SectionHolder
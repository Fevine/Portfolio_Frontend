import React from 'react'
import style from "./index.module.scss"

function ExCard({ organization, role, period, children }) {
  return (
    <div className={style.exCard}>
      <div className={style.header}>
        <h3 className={style.organization}>{organization}</h3>
        <span>({period})</span>
      </div>
      <h2 className={style.role}>{role}</h2>
      <p className={style.details}>{children}</p>
    </div>
  )
}

export default ExCard
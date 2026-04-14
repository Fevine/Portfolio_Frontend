import React from 'react'
import style from "./index.module.scss"

function ExCard({ organization, role, period, children, url = "" }) {

  return (
    <div className={style.exCard}>
      <div className={style.header}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={style.organization}
        >
          {organization}
        </a>
        <span>({period})</span>
      </div>
      <h2 className={style.role}>{role}</h2>
      <p className={style.details}>{children}</p>
    </div>
  )
}

export default ExCard
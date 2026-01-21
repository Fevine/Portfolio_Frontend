import React from 'react'
import style from "./index.module.scss"

function BioItem({ title, content, link = null }) {
  return (
    <div className={style.bioItem}>
      <h3 className={style.title}>{title}:</h3>
      {link ? <a className={style.info} href={link}>{content}</a> : <p className={style.info}>{content}</p>}
    </div>
  )
}

export default BioItem
import React from 'react'
import style from "./index.module.scss"

function BioItem({ title, content }) {
  return (
    <div className={style.bioItem}>
      <h3 className={style.title}>{title}:</h3>
      <p className={style.info}>{content}</p>
    </div>
  )
}

export default BioItem
import React from 'react'
import style from "./index.module.scss"

function Contact() {
  return (
    <div className={style.contact}>
      <input className={style.name} type="text" placeholder='Name *' />
      <input className={style.email} type="email" placeholder='Email *' />
      <input className={style.phone} type="tel" placeholder='Phone' />
      <textarea
        className={style.message}
        placeholder='Message *'
        rows={7}
      ></textarea>
      <button className={style.sendBtn} type='submit'>Send Message</button>
    </div>
  )
}

export default Contact
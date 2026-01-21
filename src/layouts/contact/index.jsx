import React from 'react'
import styles from "./index.module.scss"
import ContactForm from '../../components/contactFrom';

function Contact() {

  return (
    <>
      <div className={styles.container}>
        <ContactForm />
      </div>
    </>
  )
}

export default Contact
import React from 'react'
import style from "./index.module.scss"

function Contact() {

  const [MessageData, setMessageData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your submit logic here (e.g., send data to API)
    console.log("Submitted:", MessageData);
  };

  return (
    <form className={style.contact} onSubmit={handleSubmit}>
      <input
        value={MessageData.name}
        onChange={handleChange}
        name="name"
        className={style.name}
        type="text"
        placeholder='Name *'
      />
      <input
        value={MessageData.email}
        onChange={handleChange}
        name="email"
        className={style.email}
        type="email"
        placeholder='Email *'
      />
      <input
        value={MessageData.phone}
        onChange={handleChange}
        name="phone"
        className={style.phone}
        type="tel"
        placeholder='Phone'
      />
      <textarea
        className={style.message}
        value={MessageData.message}
        onChange={handleChange}
        name="message"
        placeholder='Message *'
        rows={7}
      ></textarea>
      <button
        className={style.sendBtn}
        type='submit'
        disabled={
          !MessageData.name.trim() ||
          !MessageData.email.trim() ||
          !MessageData.message.trim()
        }
      >
        Send Message
      </button>
    </form>
  )
}

export default Contact
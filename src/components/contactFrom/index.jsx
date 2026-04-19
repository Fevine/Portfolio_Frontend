import React from 'react';
import emailjs from '@emailjs/browser';
import style from "./index.module.scss";

function ContactForm() {
  const [MessageData, setMessageData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSending, setIsSending] = React.useState(false);
  const [feedback, setFeedback] = React.useState({ type: '', message: '' });

  const apiKey = import.meta.env.VITE_PUBLIC_KEY_EMAILJS;
  const serviceId = import.meta.env.VITE_SERVICE_ID_EMAILJS;
  const templateId = import.meta.env.VITE_TEMPLATE_ID_EMAILJS;

  console.log('Test var:', import.meta.env.VITE_TEST_VAR);
  console.log('All env vars:', import.meta.env);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback({ type: '', message: '' });

    try {
      if (!apiKey) {
        console.error("Public key missing!");
        return;
      }
      // Replace with your EmailJS credentials
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: MessageData.name,
          from_email: MessageData.email,
          phone: MessageData.phone || 'Not provided',
          message: MessageData.message,
          to_email: 'mammadtaghialiyev@gmail.com'
        },
        apiKey,
      );

      setFeedback({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setMessageData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setFeedback({ type: 'error', message: 'Failed to send. Please try again or contact directly.' });
      console.error('EmailJS error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {feedback.message && (
        <div className={feedback.type === 'success' ? style.successMsg : style.errorMsg}>
          {feedback.message}
        </div>
      )}

      <form className={style.contact} onSubmit={handleSubmit}>
        <input
          value={MessageData.name}
          onChange={handleChange}
          name="name"
          className={style.name}
          type="text"
          placeholder='Name *'
          required
        />
        <input
          value={MessageData.email}
          onChange={handleChange}
          name="email"
          className={style.email}
          type="email"
          placeholder='Email *'
          required
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
          required
        ></textarea>
        <button
          className={style.sendBtn}
          type='submit'
          disabled={
            !MessageData.name.trim() ||
            !MessageData.email.trim() ||
            !MessageData.message.trim() ||
            isSending
          }
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </>
  );
}

export default ContactForm;
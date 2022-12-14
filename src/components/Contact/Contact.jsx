import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from './Contact.module.css';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_yqqib8o',
        'template_cuiti3d',
        form.current,
        'Q1V9qOOYJMrSaiOLu'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className={style.mainContact}>
      <h2>-- Contact Me --</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email Address" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" placeholder="Your message" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

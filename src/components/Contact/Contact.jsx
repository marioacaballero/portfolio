import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import style from './Contact.module.css';
import { validator } from './validators';

function Contact() {
  const form = useRef();
  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault();
    setErrors(
      validator({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!errors.email && !errors.subject && !errors.message && input.message) {
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
      setInput(initialState);
    }
  };

  return (
    <div className={style.mainContact}>
      <h2>-- Contact Me --</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={input.name}
          onChange={(e) => handleInputChange(e)}
        />
        <input
          type="text"
          name="subject"
          value={input.subject}
          placeholder="Subject"
          onChange={(e) => handleInputChange(e)}
        />
        {errors.subject && <p>{errors.subject}</p>}
        <input
          type="email"
          name="email"
          value={input.email}
          placeholder="Email Address"
          onChange={(e) => handleInputChange(e)}
        />
        {errors.email && <p>{errors.email}</p>}
        <textarea
          name="message"
          value={input.message}
          placeholder="Your message"
          onChange={(e) => handleInputChange(e)}
        />
        {errors.message && <p>{errors.message}</p>}
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

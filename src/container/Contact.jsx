import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { DiAtom } from 'react-icons/di';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0nk3vi3',
        'template_xz85g8y',
        form.current,
        'Lceb3DGw2sQTC9Lyx',
      )
      .then(
        (res) => {
          console.log(res.text);
          console.log('message sent');
          e.target.reset();
        },
        (err) => {
          console.log(err.text);
        },
      );
  };

  return (
    <div className="contact__main">
      <div className="contact__container">
        <h1 className="contact__heading">
          <DiAtom className="contact__icon" />
          <span>Contact Us</span>
        </h1>
        <form onSubmit={handleSubmit} ref={form} className="contact__form">
          <div className="contact__inputs">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="contact__name"
              name="user_name"
              autoComplete="off"
              required
            />
            <span />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="contact__email"
              name="user_email"
              autoComplete="off"
              required
            />
            <label htmlFor="message">Message</label>
            <span />
            <textarea
              name="message"
              className="contact__textarea"
              cols="30"
              rows="10"
              required
            />
            <div className="contact__btn">
              <button className="global__btn" type="submit">
                <span className="global__btn-line" />
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

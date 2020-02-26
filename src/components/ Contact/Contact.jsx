import React, { useState } from 'react'
import './contact.scss'

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    id: 0,
    name: '',
    email: '',
    message: '',
  })

  const updateContactObject = e => {
    e.persist()
    setContactForm(prevContactForm => ({
      ...prevContactForm,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <section className="contact" id="contact">
      <h1 className="contactTitle">Contact Us</h1>
      <section className="contactForm">
        <section className="inner">
          <img src="/Assets/airMail.jpg" className="stamp" />
          <form>
            <input
              className="formName"
              name="name"
              type="text"
              value={contactForm.name}
              placeholder="Enter Your Name"
              onChange={updateContactObject}
            />
            <input
              className="formEmail"
              name="email"
              type="email"
              value={contactForm.email}
              placeholder="Enter Your Email"
              onChange={updateContactObject}
            />
            <textarea
              className="formMessage"
              name="message"
              type="string"
              placeholder="Enter Message"
              row="10"
              onChange={updateContactObject}
            >
              {contactForm.message}
            </textarea>
          </form>
          <button className="submitButton">Submit</button>
        </section>
      </section>
    </section>
  )
}

export default Contact

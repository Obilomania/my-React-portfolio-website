import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiWhatsapp } from 'react-icons/si'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__Icon'/>
            <h4>Email</h4>
            <h5>obilomania@gmail.com</h5>
            <a href="mailto:obilomania@gmail.com">Send A Message</a>
          </article>

          <article className="contact__option">
            <AiOutlineInstagram className='contact__Icon'/>
            <h4>Instagram</h4>
            <h5>@obilomania</h5>
            <a href="https://www.instagram.com/obilomania/">Follow Me</a>
          </article>

          <article className="contact__option">
            <SiWhatsapp className='contact__Icon'/>
            <h4>Whatsapp</h4>
            <h5>+2348033954540</h5>
            <a href="https://wa.me/message/BYWVQLJ45P6XO1">Send A Message</a>
          </article>
        </div>
      
      </div>
    </section>
  )
} 

export default Contact
import React,{useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dcf8mss', 'template_4hg3fok', form.current, 'VwI7ZbkalJ5zk9VM0')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_icon'/>
            <h4>Email</h4>
            <h5>susan5591448@gmail.com</h5>
            <a href="mailto:susan5591448@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_icon'/>
            <h4>Messenger</h4>
            <h5>Susan Dangol</h5>
            <a href="https://m.me/susan.dangol.10" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_icon'/>
            <h4>WhatsApp</h4>
            <h5>9860104545</h5>
            <a href="https://api.whatsapp.com/send?phone+9779860104545" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
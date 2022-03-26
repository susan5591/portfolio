import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Design</h3>            
          </div>
          <div className='description'>Design the best layout for the users.</div>
        </article>
        {/* web development */}
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <div className='description'>I am a frontend developer.</div>
        </article>        
      </div>
    </section>
  )
}

export default Services
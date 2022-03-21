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
            <h3>UI/UX</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet  elit.</p>
            </li>          
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet  elit.</p>
            </li>          
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet  elit.</p>
            </li>          
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet  elit.</p>
            </li>          
          </ul>
        </article>
        {/* web development */}
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet  elit.</p>
            </li>          
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet  elit.</p>
            </li>          
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet  elit.</p>
            </li>  
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet  elit.</p>
            </li> 
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet  elit.</p>
            </li>         
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet  elit.</p>
            </li>          
          </ul>
        </article>
        {/* content creattion */}
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet  elit.</p>
            </li>          
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet sdfssdf elit.</p>
            </li>          
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet  elit.</p>
            </li>          
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet  elit.</p>
            </li>          
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
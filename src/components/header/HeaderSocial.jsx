import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href="https://www.linkedin.com/in/susan-dangol-bb45a5199/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/susan5591" target='_blank'><FaGithub/></a>
        <a href="https://www.facebook.com/susan.dangol.10/" target='_blank'><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocial
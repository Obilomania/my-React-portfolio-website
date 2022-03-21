import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'

const HeaderSocial = () => {
  return (
      <div className='header__socials'>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub/></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><BsWhatsapp/></a>
    </div>
  )
}

export default HeaderSocial
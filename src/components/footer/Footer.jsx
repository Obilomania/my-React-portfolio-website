import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import './footer.css'


const Footer = () => {
  return (
    <footer>
      {/* <a href="" className='footer-logo'><h2>ObiloMania</h2></a> */}

      <ul className="footerLinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/obinnaobi.iloanya"><FaFacebookF/></a>
        <a href="https://instagram.com/obilomania"><AiOutlineInstagram/></a>
        <a href="https://twitter.com/obilomania"><FaTwitter/></a>
      </div>

      <div className="copyright">
        <small> &copy; Obinna for Obilomania </small>
      </div>
    </footer>
  )
}

export default Footer
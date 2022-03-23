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
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><AiOutlineInstagram/></a>
        <a href="https://twitter.com"><FaTwitter/></a>
      </div>

      <div className="copyright">
        <small> &copy; Obinna for Obilomania </small>
      </div>
    </footer>
  )
}

export default Footer
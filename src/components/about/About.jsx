import React from 'react'
import './about.css'
import ME from '../../images/Profile-P.png'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
            <img src={ME} alt="myPhoto" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ WorldWide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi deserunt quaerat molestiae eveniet voluptate. Repudiandae nesciunt itaque, tenetur recusandae officia vel commodi! Aliquid vitae natus iusto soluta dolores, qui rerum!</p>
          <a href="#contact" className='btn btn-primary'>Talk To Me</a>
        </div>
      </div>
     
    </section>
  )
}

export default About
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
          
          <p>I am a self taught Web Developer and a graphics designer with 10years of experience in graphics design and 2years in web development. I have worked with some SME's, big companies and a hotel. I have built some websites and web app with Javascript, HTML and CSS. Well, there is nothing much to me asides the fact that I am a fun guy and I can be extremely serious when I need to be. I hate getting disappointed so I try my best not to disappoint anyone so when I am given a task or an appointment, I try my best to be punctual and deliver.</p>
          <a href="#contact" className='btn btn-primary'>Talk To Me</a>
        </div>
      </div>
     
    </section>
  )
}

export default About
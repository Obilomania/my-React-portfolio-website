import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Bounce';


const Experience = () => {
  return (
    <section id='experience'>
      <Bounce>

      <h5> My Skill Set</h5>
      <h2>Experiences</h2>
      </Bounce>
      <div className="container experience__container">
      <Slide left>
        <div className="experience__frontend">
          <h3> FrontEnd Development</h3>
          <div className="experience__content">
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icons"/>
              <div>
                <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icons"/>
              <div>
                <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icons"/>
              <div>
                <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icons"/>
              <div>
                <h4>TailWind</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icons"/>
              <div>
                 <h4>Sass</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icons"/>
              <div>
                <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icons"/>
              <div>
                <h4>React</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </Slide>
          <Slide right>
        <div className="experience__frontend">
          <h3> Graphics Design</h3>
          <div className="experience__content">
            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icons"/>
              <div>
                <h4>Adobe illustrator</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className="experience_details_icons"/>
              <div>
                <h4>PhotoShop</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            
          </div>
        </div>
        </Slide>
      </div>
    </section>
  )
}

export default Experience
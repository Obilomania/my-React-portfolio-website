import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'
import Zoom from 'react-reveal/Zoom';


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
          <Zoom bottom>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

            <ul className="service__list">
            <li> <BiCheck className='service__list-icon' />
              <p>Landing Page Designs</p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>Company Websites</p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>E-Commerce Websites</p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>Booking Management Websites</p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>Portfolio Websites</p>
            </li>
            <li> <BiCheck className='service__list-icon' />
              <p>Website Management</p>
            </li>
            </ul>
          </article>
          </Zoom>
<Zoom bottom>
                <article className="service">
          <div className="service__head">
            <h3>Graphics Design</h3>
          </div>

            <ul className="service__list">
            <li> <BiCheck className='service__list-icon' />
              <p>Logo Design</p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>Social Media Banners</p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>Banner Designs, mock ups</p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>Print Designs</p>
            </li>
            </ul>
        </article>
        </Zoom>
        <Zoom bottom>
                <article className="service">
          <div className="service__head">
            <h3>Social Media Manager</h3>
          </div>

            <ul className="service__list">
            <li> <BiCheck className='service__list-icon' />
              <p>Social Media Account Management</p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>Content Creation</p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>Responding to clients</p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>Designing Attractive Photos to match the post</p>
            </li>

            <li> <BiCheck className='service__list-icon' />
              <p>Run Ads on social media platforms</p>
            </li>
            </ul>
          </article>
          </Zoom>
      </div>
    </section>
  )
}

export default Services
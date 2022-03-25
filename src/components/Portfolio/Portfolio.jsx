import React from 'react'
import './portfolio.css'
import IMG1 from '../../images/portfolio1.png'
import IMG2 from '../../images/portfolio2.jpg'
import IMG3 from '../../images/portfolio3.jpg'
import IMG4 from '../../images/portfolio4.jpg'
import IMG5 from '../../images/portfolio5.png'
import IMG6 from '../../images/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Works</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>ELITE OGBE WEBSITE</h3>
          <div className="portfolio__item-CTA">
            <a href="https://github.com/Obilomania" className='btn'>Github</a>
           <a href="https://youtu.be/6tXpeq745LE" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>CITY POP HOTEL</h3>
          <div className="portfolio__item-CTA">
            <a href="https://github.com/Obilomania" className='btn'>Github</a>
           <a href="https://youtu.be/svyiijr2RyA" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>BEEKS BECS WEBSITE</h3>
          <div className="portfolio__item-CTA">
            <a href="https://github.com/Obilomania" className='btn'>Github</a>
           <a href="https://youtu.be/95Zph99d5Ag" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>WEATHER APP</h3>
          <div className="portfolio__item-CTA">
            <a href="https://github.com/Obilomania" className='btn'>Github</a>
           <a href="https://youtu.be/0TPzLizUOOk" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Attendance Check App</h3>
          <div className="portfolio__item-CTA">
            <a href="https://github.com/Obilomania" className='btn'>Github</a>
           <a href="https://youtu.be/oTy4lhAyJ_Q" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-CTA">
            <a href="https://github.com/Obilomania" className='btn'>Github</a>
           <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio
import React from 'react'
import './portfolio.css'
import IMG1 from '../../images/portfolio1.png'
import IMG2 from '../../images/portfolio2.jpg'
import IMG3 from '../../images/portfolio3.jpg'
import IMG4 from '../../images/portfolio4.jpg'
import IMG5 from '../../images/portfolio5.png'
import IMG6 from '../../images/portfolio6.jpg'
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Works</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
         <Slide left>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>ELITE OGBE WEBSITE</h3>
          <div className="portfolio__item-CTA">
            <a href="https://github.com/Obilomania" target="_blank" className='btn'>Github</a>
           <a href="https://youtu.be/6tXpeq745LE" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
          </article>
          </Slide>
        <Zoom bottom>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>CITY POP HOTEL</h3>
          <div className="portfolio__item-CTA">
            <a href="https://github.com/Obilomania" target="_blank" className='btn'>Github</a>
           <a href="https://youtu.be/svyiijr2RyA" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
          </article>
          </Zoom>
          <Slide right>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>BEEKS BECS WEBSITE</h3>
          <div className="portfolio__item-CTA">
            <a href="https://github.com/Obilomania" target="_blank" className='btn'>Github</a>
           <a href="https://youtu.be/95Zph99d5Ag" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
          </article>
          </Slide>
          <Slide left>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>WEATHER APP</h3>
          <div className="portfolio__item-CTA">
            <a href="https://github.com/Obilomania" target="_blank" className='btn'>Github</a>
           <a href="https://youtu.be/0TPzLizUOOk" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        </Slide>
        <Zoom bottom>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Attendance Check App</h3>
          <div className="portfolio__item-CTA">
            <a href="https://github.com/Obilomania" target="_blank" className='btn'>Github</a>
           <a href="https://youtu.be/oTy4lhAyJ_Q" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
          </article>
          </Zoom>
          <Slide right>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-CTA">
            <a href="https://github.com/Obilomania" target="_blank" className='btn'>Github</a>
           <a href="https://github.com" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
          </article>
          </Slide>
        
      </div>
    </section>
  )
}

export default Portfolio
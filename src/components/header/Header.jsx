import React from 'react'
import "./header.css"
import ActionButtons from './Actionbuttons'
import ME from '../../images/Profile-P.png'
// import ME from '../../images/me.png'
import HeaderSocial from './HeaderSocial'
import { Zoom } from 'react-reveal'
import Jump from 'react-reveal/Jump';
import Flip from 'react-reveal/Flip';


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <Zoom left>
          <h5>Hello I am</h5> 
        </Zoom>
        <Zoom right>
          <h1>Obinna Ishmael Iloanya</h1>
        </Zoom>
        <Jump>
          <h5 className="text-light"> Front End Developer</h5>
          </Jump>
        <ActionButtons />
        <HeaderSocial/>

          <Zoom>
        <div className="me">

            <img src={ME} alt="" />
        </div>
          </Zoom>
        
        <a href="#contact" className='scroll__down'>Scroll Down</a>

         
      </div>
    </header>
  )
}

export default Header;
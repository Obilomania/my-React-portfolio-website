import React from 'react'
import "./header.css"
import ActionButtons from './Actionbuttons'
import ME from '../../images/Profile-P.png'
// import ME from '../../images/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5> 
        <h1>Obinna Ishmael Iloanya</h1>
        <h5 className="text-light"> Front End Developer</h5>
        <ActionButtons />
        <HeaderSocial/>

        <div className="me">
            <img src={ME} alt="" />
        </div>
        
        <a href="#contact" className='scroll__down'>Scroll Down</a>

         
      </div>
    </header>
  )
}

export default Header;
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const [show, setshow] = useState(false)
  return (
    <nav>
      <div className='logo'>
        KING's
      </div>
      <div className={show ? "navLinks showmenu":"navLinks"}>
        <div className='links'>
          <Link to="hero" spy={true} smooth={true} duration={500}>HOME</Link>
          <Link to="services" spy={true} smooth={true} duration={500}>SERVICE</Link>
          <Link to="about" spy={true} smooth={true} duration={500}>About</Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
        </div>
      </div>
      <div className='hamburger' onClick={()=>setshow(!show)}>
            <GiHamburgerMenu />
      </div>
    </nav>
  )
}

export default Navbar
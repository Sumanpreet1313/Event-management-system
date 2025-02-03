import React from 'react'
import { Link } from 'react-scroll'

const HeroSection = () => {
  return (
    <section className='hero'>
       <img src="/restaurant.jpg" alt="restaurant" />
       <div className='item'>
        <h3>Dream maker</h3>
        <div>
          <h1>Your personal dream Maker</h1>
          <p>we belive tat it is all about the big deams and the samll details</p>
          <Link to="contact" spy={true} smooth={true} duration={500}>BOOK NOW</Link>
        </div>
       </div>
    </section>
  )
}

export default HeroSection
import React from 'react'

import Picture from './Picture.js'
import photo from './../assets/img/photo.jpg'


// Primary component on homepage
const Hero = () => (
  <div className='hero'>

    <Picture source={photo} alt={'Author'} />

    <div>
      <p className='hero-text'>
        <span role='img' aria-label='computer'>💻</span>
        <i>Web Developer</i>
      </p>

      <p className='hero-text'>
        <span role='img' aria-label='mountain'>⛰️</span>
        <i>Rock Climber</i>
      </p>

      <p className='hero-text'>
        <span role='img' aria-label='house'>🏡</span>
        <i>Kansas City, MO</i>
      </p>
    </div>

  </div>
)

export default Hero

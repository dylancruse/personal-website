import React, { Component } from 'react'

import './Hero.css'
import '../Picture'
import photo from '../../assets/img/photo.jpg'
import Picture from '../Picture'

// Primary component on homepage
class Hero extends Component {
  render() {
    return (
      <div className='hero'>

        <Picture image={photo}/>

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
  }
}

export default Hero

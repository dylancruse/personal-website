import React, { Component } from 'react'

import './Hero.css'
import '../Picture'
import photo from '../../assets/img/photo.jpg'
import Picture from '../Picture'

class Hero extends Component {
  render() {
    return (
      <div className='hero'>
        <Picture image={photo}/>
        <div>
          <p className='hero-text'>
            <span role='img' aria-label='computer'>💻</span>
            Web Developer
          </p>
          <p className='hero-text'>
            <span role='img' aria-label='mountain'>⛰️</span>
            Rock Climber
          </p>
          <p className='hero-text'>
            <span role='img' aria-label='house'>🏡</span>
            Kansas City, MO
          </p>
        </div>
      </div>
    )
  }
}

export default Hero

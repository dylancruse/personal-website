import React, { Component } from 'react'

import './Hero.css'
import '../Picture'
import photo from '../../assets/img/photo.jpg'
import Picture from '../Picture'

class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <Picture image={photo}/>
        <p>Text</p>
      </div>
    )
  }
}

export default Hero

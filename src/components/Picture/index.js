import React, { Component } from 'react'

import './Picture.css'

class Picture extends Component {
  render() {
    
    // Destructure props
    const { image } = this.props

    // Return a picture with the image prop as its source
    return (
      <div className='picture-wrapper'>
        <img src={image} alt='Author' className='picture'/>
      </div>
    )
  }
}

export default Picture

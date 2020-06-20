import React, { Component } from 'react'

import './Picture.css'

class Picture extends Component {
  render() {
    
    const { image } = this.props

    return (
      <div className='picture-wrapper'>
        <img src={image} alt='Author' className='picture'/>
      </div>
    )
  }
}

export default Picture

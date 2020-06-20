import React, { Component } from 'react'

import './Picture.css'

class Picture extends Component {
  render() {
    
    const { image } = this.props

    return (
      <div className="PictureWrapper">
        <img src={image} alt="Author" className="Picture"/>
      </div>
    )
  }
}

export default Picture

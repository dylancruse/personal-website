import React from 'react'

import './Picture.css'


// Return a picture using the source prop
const Picture = ({ source, alt }) => (
  <div className='picture-wrapper'>

    <img src={source} alt={alt} className='picture'/>
    
  </div>
)

export default Picture

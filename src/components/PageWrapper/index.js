import React, { Component } from 'react'

import './PageWrapper.css'
import Hero from '../Hero'

class PageWrapper extends Component {
  render() {
    return (
      <div className="PageWrapper">
        
        <Hero />
      </div>
    )
  }
}

export default PageWrapper
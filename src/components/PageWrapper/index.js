import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './PageWrapper.css'
import Hero from '../Hero'
import DadJokes from '../DadJokes'


// Wraps all main components and routes
class PageWrapper extends Component {
  render() {
    return (
      <div className='page-wrapper'>
          {/* Homepage */}
          <Route exact path='/'>
            <Hero />
          </Route>

          {/* Dad jokes */}
          <Route path='/dadjokes'> 
            <DadJokes />
          </Route>
      </div>
    )
  }
}

export default PageWrapper
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './PageWrapper.css'
import Hero from '../Hero'
import DadJokes from '../DadJokes'

class PageWrapper extends Component {
  render() {
    return (
      <div className='page-wrapper'>
        <Router>

          <Route exact path='/'>
            <Hero />
          </Route>

          <Route path='/dadjokes' component={DadJokes}></Route>

        </Router>
      </div>
    )
  }
}

export default PageWrapper
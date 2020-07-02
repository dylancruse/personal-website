import React from 'react'
import { Route } from 'react-router-dom'

import Hero from '../Hero.js'
import DadJokes from '../DadJokes.js'
import GraphQL from '../GraphQL.js'


// Wraps all main components and routes
const PageWrapper = () => (
  <div className='page-wrapper'>

      {/* Homepage */}
      <Route exact path='/'>
        <Hero />
      </Route>

      {/* Dad jokes page */}
      <Route path='/dadjokes'> 
        <DadJokes />
      </Route>

      {/* GraphQL page */}
      <Route path='/graphql'>
        <GraphQL />
      </Route>

  </div>
)

export default PageWrapper

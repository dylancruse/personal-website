import React, { Component } from 'react'

import './App.css'
import Navbar from '../Navbar'
import PageWrapper from '../PageWrapper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <PageWrapper />
      </div>
    )
  }
}

export default App

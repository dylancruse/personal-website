import React, { Component } from 'react'

import './App.css'
import Navbar from '../Navbar/Navbar'
import PageWrapper from '../PageWrapper/PageWrapper'

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

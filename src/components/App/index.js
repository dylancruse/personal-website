import React, { Component } from 'react'

import './App.css'
import Navbar from '../Navbar'
import PageWrapper from '../PageWrapper'

class App extends Component {

  state = {
    showMenu: false
  }

  toggleMenu = () => {
    console.log('clicked')
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    return (
      <div className="App">
        <Navbar toggleMenu={this.toggleMenu} />
        <PageWrapper />
      </div>
    )
  }
}

export default App

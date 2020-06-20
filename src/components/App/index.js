import React, { Component } from 'react'

import './App.css'
import Navbar from '../Navbar'
import Menu from '../Menu'
import PageWrapper from '../PageWrapper'

class App extends Component {

  state = {
    showMenu: false
  }

  toggleMenu = () => {
    console.log('Menu button clicked')
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    return (
      <div className='app'>
        <Navbar toggleMenu={this.toggleMenu} />
        {this.state.showMenu && <Menu />}
        <PageWrapper />
      </div>
    )
  }
}

export default App

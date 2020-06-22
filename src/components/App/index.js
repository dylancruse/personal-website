import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import Navbar from '../Navbar'
import Menu from '../Menu'
import PageWrapper from '../PageWrapper'

// Main App component
class App extends Component {

  // Global state
  state = {
    showMenu: false,
    pages: [{
      path: '/',
      title: '🏠 Home'
    }, {
      path: '/dadjokes',
      title: '🤷‍♂️ Dad Jokes'
    }, {
      path: '/graphql',
      title: '🚀 GraphQL'
    }]
  }

  // Open/close the menu
  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  // Used by links to close the menu when clicked
  hideMenu = () => {
    this.setState({ showMenu: false })
  }

  render() {
    return (
      <div className='app'>
        <Router>

          <Navbar toggleMenu={this.toggleMenu} />

          {/* Show the menu if showMenu state is true */}
          {this.state.showMenu && <Menu pages={this.state.pages} hideMenu={this.hideMenu} />}

          <PageWrapper />
          
        </Router>
      </div>
    )
  }
}

export default App

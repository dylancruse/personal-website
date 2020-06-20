import React, { Component } from 'react'

import './Navbar.css'
import NavItem from '../NavItem'

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavItem text={'Dylan Cruse'} />
      </div>
    )
  }
}

export default Navbar
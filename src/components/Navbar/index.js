import React, { Component } from 'react'

import './Navbar.css'
import NavItem from '../NavItem'
import MenuButton from '../MenuButton'

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <MenuButton toggleMenu={this.props.toggleMenu} />
        <NavItem text={'Dylan Cruse'} />
      </div>
    )
  }
}

export default Navbar
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './NavItem.css'

// Navbar item component
class NavItem extends Component {
  
  render() {

    // Destructure props
    const { text } = this.props

    // Return a link using the text prop
    return (
      <div className='nav-item'>
        <Link to='/' className='nav-item__text'>{text}</Link>
      </div>
    )
  }
}

export default NavItem

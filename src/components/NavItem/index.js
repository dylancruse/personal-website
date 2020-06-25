import React from 'react'
import { Link } from 'react-router-dom'

import './NavItem.css'

// Navbar item component
const NavItem = ({ text, path }) => (
  <div className='nav-item'>

    <Link to={path} className='nav-item__text'>{text}</Link>
    
  </div>
)

export default NavItem

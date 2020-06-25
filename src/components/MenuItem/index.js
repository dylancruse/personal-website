import React from 'react'
import { Link } from 'react-router-dom'

import './MenuItem.css'

// Return a link to a page (that hides the menu when clicked)
const MenuItem = ({ path, title, hideMenu }) => (

  <Link to={path} onClick={hideMenu} className='menu-item' >{title}</Link>
  
)

export default MenuItem
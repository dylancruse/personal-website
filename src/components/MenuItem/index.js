import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './MenuItem.css'

class MenuItem extends Component {
  render() {

    // Destructure props
    const { path, title, hideMenu } = this.props

    // Return a link to a page (that hides the menu when clicked)
    return (
      <Link to={path} onClick={hideMenu} className='menu-item' >{title}</Link>
    )
  }
}

export default MenuItem
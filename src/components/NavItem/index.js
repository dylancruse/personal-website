import React, { Component } from 'react'

import './NavItem.css'

class NavItem extends Component {
  
  render() {

    const { text } = this.props

    return (
      <div className='nav-item'>
        <p className='nav-item__text'>{text}</p>
      </div>
    )
  }
}

export default NavItem

import React, { Component } from 'react'

import './NavItem.css'

class NavItem extends Component {
  
  render() {

    const { text } = this.props

    return (
      <div className="NavItem">
        <p>{text}</p>
      </div>
    )
  }
}

export default NavItem
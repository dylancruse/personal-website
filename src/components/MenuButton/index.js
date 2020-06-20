import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './MenuButton.css'

class MenuButton extends Component {
  render() {
    return (
      <FontAwesomeIcon 
        icon={faBars}
        size={"2x"}
        onClick={this.props.toggleMenu} 
        className="MenuButton" 
      />
      // <button onClick={this.props.toggleMenu} className="MenuButton">Menu</button>
    )
  }
}

export default MenuButton
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './MenuButton.css'

class MenuButton extends Component {
  render() {

    // Returns the bars svg used in the navbar to open the menu
    return (
      <FontAwesomeIcon 
        icon={faBars}
        size={'2x'}
        onClick={this.props.toggleMenu} 
        className='menu-btn' 
      />
    )
  }
}

export default MenuButton
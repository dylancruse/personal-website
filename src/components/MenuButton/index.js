import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './MenuButton.css'


// Returns the bars svg used in the navbar to open the menu
const MenuButton = ({ toggleMenu }) => (

  <FontAwesomeIcon 
    icon={faBars}
    size={'2x'}
    onClick={toggleMenu} 
    className='menu-btn' 
  />
  
)

export default MenuButton
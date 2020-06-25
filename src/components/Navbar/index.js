import React from 'react'

import './Navbar.css'
import NavItem from '../NavItem'
import MenuButton from '../MenuButton'

const Navbar = ({ toggleMenu }) => (
  <div className='navbar'>

    <MenuButton toggleMenu={toggleMenu} />
    <NavItem text={'Dylan Cruse'} path={'/'} />

  </div>
)

export default Navbar
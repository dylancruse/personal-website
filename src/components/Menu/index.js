import React from 'react'

import './Menu.css'
import MenuItem from '../MenuItem'

// Popup menu (currently used to display page links)
const Menu = ({ pages, hideMenu }) => (
  <div className='menu'>

    {/* Create a MenuItem component for each passed in page */}
    {pages.map(page => (
      <MenuItem path={page.path} title={page.title} hideMenu={hideMenu} key={page.path}/>
    ))}

  </div>
)

export default Menu

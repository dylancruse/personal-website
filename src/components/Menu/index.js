import React, { Component } from 'react'

import './Menu.css'
import MenuItem from '../MenuItem'

// Popup menu (currently used to display page links)
class Menu extends Component {
  render() {

    // Destructure props
    const { pages, hideMenu } = this.props

    // Return a MenuItem for each page
    return (
      <div className='menu'>
        {/* <h3 className='menu__header'><i>Links</i></h3> */}
        {pages.map(page => <MenuItem path={page.path} title={page.title} hideMenu={hideMenu} />)}
      </div>
    )
  }
}

export default Menu

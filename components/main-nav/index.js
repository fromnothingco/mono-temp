import React from 'react'

const mainNav = (props) =>
  <nav {...props} className={`main-nav ${props.className}`}>
    <ul>
      {props.navitems.map(item => (<li><a href={item.url}>{item.label}</a></li>))}
    </ul>
  </nav>

export default mainNav

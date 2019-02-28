import React , {Component} from 'react'
import Logo from '../logo'
export default class Header extends Component {
  render() {
    return (
        <header className="main">
          <Logo className="logo"/>
          
          <img src="/static/media/header_big.jpg" />
        </header>
    )
  }
}

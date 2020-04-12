import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'

import profile from '../../assets/profile.png'
import logo from '../../assets/logo.png'
import burgerMenu from '../../assets/burger-menu.png'

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__header">
          <img className="navbar__profile" src={profile} alt="profile" />
          <Link to="/">
            <img className="navbar__logo" src={logo} alt="prepr" />
          </Link>
          <img className="navbar__menu" src={burgerMenu} alt="menu" />
        </div>
        <input className="navbar__search" type="text" placeholder="Search Challenges, Labs, Projects" />
      </div>
    )
  }
}

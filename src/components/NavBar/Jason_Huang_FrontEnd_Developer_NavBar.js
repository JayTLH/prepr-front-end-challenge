import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Jason_Huang_FrontEnd_Developer_NavBar.scss';

import BurgerMenu from '../BurgerMenu/Jason_Huang_FrontEnd_Developer_BurgerMenu';

import profile from '../../assets/Jason_Huang_FrontEnd_Developer_profile.png';
import logo from '../../assets/Jason_Huang_FrontEnd_Developer_logo.png';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__header">
          <img className="navbar__profile" src={profile} alt="profile" />
          <Link to="/">
            <img className="navbar__logo" src={logo} alt="prepr" />
          </Link>
          <BurgerMenu />
        </div>
        <input className="navbar__search" type="text" placeholder="Search Challenges, Labs, Projects" />
      </div>
    )
  }
}

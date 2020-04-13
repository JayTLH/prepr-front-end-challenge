import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Jason_Huang_FrontEnd_Developer_BurgerMenu.scss';

import burgerMenu from '../../assets/Jason_Huang_FrontEnd_Developer_burger-menu.png';
import close from '../../assets/Jason_Huang_FrontEnd_Developer_close.png';

const Slide = (props) => {
  return (
    <motion.div
      initial={{
        x: 180,
        y: -48
      }}

      animate={{
        x: 20
      }}

      transition={{
        ease: "easeOut",
        duration: 0.5,
      }}
    >
      {props.children}
    </motion.div>
  )
}

export default class BurgerMenu extends Component {
  state = {
    burger: false
  }

  toggleMenu = (event) => {
    this.setState({ burger: !this.state.burger })
  }

  render() {
    return (
      <div className="burger">
        <button className="burger__btn" onClick={this.toggleMenu}>
          <img className="navbar__menu" src={burgerMenu} alt="menu" />
        </button>

        {this.state.burger ?
          <Slide>
            <div className="burger__display">
              <button className="burger__close" onClick={this.toggleMenu}>
                <img className="burger__close-icon" src={close} alt="close menu" />
              </button>
              <div className="burger__links">
                <Link to="/" className="burger__link">Explore</Link>
                <Link to="/" className="burger__link">Challenges</Link>
                <Link to="/" className="burger__link">Labs</Link>
                <Link to="/" className="burger__link">Projects</Link>
              </div>
            </div>
          </Slide>
          : null}
      </div>
    )
  }
}

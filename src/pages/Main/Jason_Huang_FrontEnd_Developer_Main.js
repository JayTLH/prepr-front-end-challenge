import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { DataContext } from '../../data/Jason_Huang_FrontEnd_Developer_dataContext';
import './Jason_Huang_FrontEnd_Developer_Main.scss';

// components
import DisplayCard from '../../components/DisplayCard/Jason_Huang_FrontEnd_Developer_DisplayCard'

const FadeIn = (props) => {
  return (
    <motion.div
      key={props.id}

      initial={{
        opacity: 0,
        x: 200
      }}

      animate={{
        opacity: 1,
        x: 0,
      }}

      transition={{
        ease: "easeOut",
        duration: 1,
        delay: props.time ? 0.8 + props.time / 10 : 0
      }}
    >
      {props.children}
    </motion.div>
  )
}

export default class Main extends Component {
  static contextType = DataContext;

  render() {
    let path = this.props.match.path
    let data = null
    if (path === "/") {
      data = this.context.challenges
    } else if (path === "/labs") {
      data = this.context.labs
    } else if (path === '/projects') {
      data = this.context.projects
    }

    return (
      <div className="main">
        <div className="main__side-toggle">
          <Link to="/">
            {path === "/" ?
              <button className="main__side-toggle-btn main__side-toggle-btn--selected">Challenges</button> :
              <button className="main__side-toggle-btn">Challenges</button>}
          </Link>
          <Link to="/labs">
            {path === "/labs" ?
              <button className="main__side-toggle-btn main__side-toggle-btn--selected">Labs</button> :
              <button className="main__side-toggle-btn">Labs</button>}
          </Link>
          <Link to="/projects">
            {path === "/projects" ?
              <button className="main__side-toggle-btn main__side-toggle-btn--selected">Projects</button> :
              <button className="main__side-toggle-btn">Projects</button>}
          </Link>
        </div>

        <div className="main__content">
          <div className="main__header">
            <FadeIn>
              <h1 className="main__title">EXPLORE</h1>
            </FadeIn>
            <div className="main__toggle">
              <Link to="/">
                {path === "/" ?
                  <button className="main__toggle-btn main__toggle-btn--left main__toggle-btn--selected">Challenges</button> :
                  <button className="main__toggle-btn main__toggle-btn--left">Challenges</button>}
              </Link>
              <Link to="/labs">
                {path === "/labs" ?
                  <button className="main__toggle-btn main__toggle-btn--selected">Labs</button> :
                  <button className="main__toggle-btn">Labs</button>}
              </Link>
              <Link to="/projects">
                {path === "/projects" ?
                  <button className="main__toggle-btn main__toggle-btn--right main__toggle-btn--selected">Projects</button> :
                  <button className="main__toggle-btn main__toggle-btn--right">Projects</button>}
              </Link>
            </div>
            <input className="main__search" type="text" placeholder="Search Challenges, Labs, Projects" />
          </div>
          <div className="divider" />
          <div className="main__display">
            {data.map((item, index) => {
              return (
                <FadeIn key={item.title + index} time={index + 1} id={item.title + index}>
                  <DisplayCard data={item} />
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
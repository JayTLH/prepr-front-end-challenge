import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../data/dataContext';
import './Main.scss';

// components
import DisplayCard from '../../components/DisplayCard/DisplayCard'

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
        <div className="main__header">
          <h1 className="main__title">EXPLORE</h1>
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
        </div>
        <div className="divider" />
        <div className="main__display">
          {data.map((item, index) => {
            return (
              <DisplayCard key={item.title + index} data={item} />
            )
          })}
        </div>
      </div>
    )
  }
}
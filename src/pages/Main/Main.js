import React, { Component } from 'react';
import { DataContext } from '../../data/dataContext';
import './Main.scss';

// components
import DisplayCard from '../../components/DisplayCard/DisplayCard'

export default class Main extends Component {
  static contextType = DataContext;

  render() {
    return (
      <div className="main">
        <h1 className="main__title">EXPLORE</h1>
        <div className="divider" />
        {this.context.challenges.map((item, index) => {
          return (
            <DisplayCard key={item.title + index} data={item} />
          )
        })}
      </div>
    )
  }
}
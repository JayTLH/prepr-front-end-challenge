import React, { Component } from 'react'
import { DataContext } from '../../data/Jason_Huang_FrontEnd_Developer_dataContext';
import './Jason_Huang_FrontEnd_Developer_ChallengeOverview.scss';

export default class ChallengeOverview extends Component {
  static contextType = DataContext;

  render() {
    const {description, endDate} = this.props.info

    return (
      <div className="challenge-overview">
        <div className="challenge-overview__header">
          <h2 className="challenge-overview__title">Overview</h2>
        </div>
        <div className="challenge-overview__info">
          <div className="challenge-overview__requirements">
            <h4 className="challenge-overview__label">Description</h4>
            <p className="challenge-overview__description">{description}</p>
          </div>
          <div className="challenge-overview__dates">
            <p className="challenge-overview__due">Due by <span className="challenge-overview__due--green">{endDate}</span></p>
          </div>
        </div>
      </div>
    )
  }
}

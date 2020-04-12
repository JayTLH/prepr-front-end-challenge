import React, { Component } from 'react';
import { DataContext } from '../../data/dataContext';
import './ChallengeManager.scss';

import calendar from '../../assets/calendar.png';

export default class ChallengeManager extends Component {
  static contextType = DataContext;
  state = {
    toggle: "overview"
  }

  findChallenge = () => {
    let current = this.context.challenges.find(item => item.id === this.props.match.params.id)
    return current
  }

  toggleInfo = (event) => {
    this.setState({ toggle: event.target.value })
    window.scroll({
      top: 400,
      behavior: 'smooth'
    })
  }

  render() {
    const { img, title, category, description, startDate, endDate } = this.findChallenge()
    const toggle = this.state.toggle

    return (
      <div className="challenge">
        <div className="challenge__content">
          <div className="challenge__header">
            <h1 className="challenge__title">{category}</h1>
          </div>
          <div className="challenge__display">
            <img className="challenge__img" src={img} alt="challenge" />
            <div className="challenge__info">
              <h2 className="challenge__title">{title}</h2>
              <div className="challenge__calendar">
                <img className="challenge__calendar-icon" src={calendar} alt="due dates" />
                <p className="challenge__dates">{startDate} - {endDate}</p>
              </div>
              <div className="challenge__toggle">
                {toggle === "overview" ?
                  <button className="main__side-toggle-btn main__side-toggle-btn--selected">Overview</button> :
                  <button className="main__side-toggle-btn" value="overview" onClick={this.toggleInfo}>Overview</button>}
                {toggle === "discussion" ?
                  <button className="main__side-toggle-btn main__side-toggle-btn--selected">Discussion</button> :
                  <button className="main__side-toggle-btn" value="discussion" onClick={this.toggleInfo}>Discussion</button>}
                {toggle === "submissions" ?
                  <button className="main__side-toggle-btn main__side-toggle-btn--selected">Submissions</button> :
                  <button className="main__side-toggle-btn" value="submissions" onClick={this.toggleInfo}>Submissions</button>}
                {toggle === "members" ?
                  <button className="main__side-toggle-btn main__side-toggle-btn--selected">Members</button> :
                  <button className="main__side-toggle-btn" value="members" onClick={this.toggleInfo}>Members</button>}
              </div>
            </div>
          </div>
        </div>

        <div className="challenge__overview">
          <div className="challenge__overview-header">
            <h2 className="challenge__overview-title">Overview</h2>
          </div>
          <div className="challenge__overview-info">
            <div className="challenge__overview-requirements">
              <p classname='challenge__overview-description'>Description</p>
              <p classname='challenge__overview-description'>{description}</p>
            </div>
            <div className="challenge__overview-dates">
              <p className="challenge__overview-due">Due by {endDate}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

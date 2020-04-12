import React, { Component } from 'react';
import { DataContext } from '../../data/Jason_Huang_FrontEnd_Developer_dataContext';
import './Jason_Huang_FrontEnd_Developer_ChallengeManager.scss';

import calendar from '../../assets/Jason_Huang_FrontEnd_Developer_calendar.png';

// components
import ChallengeOverview from '../../components/ChallengeOverview/Jason_Huang_FrontEnd_Developer_ChallengeOverview';
import ChallengeDiscussion from '../../components/ChallengeDiscussion/Jason_Huang_FrontEnd_Developer_ChallengeDiscussion'

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
    const { img, title, category, startDate, endDate, comments } = this.findChallenge()
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
                  <button className="challenge__toggle-btn challenge__toggle-btn--selected">Overview</button> :
                  <button className="challenge__toggle-btn" value="overview" onClick={this.toggleInfo}>Overview</button>}
                {toggle === "discussion" ?
                  <button className="challenge__toggle-btn challenge__toggle-btn--selected">Discussion</button> :
                  <button className="challenge__toggle-btn" value="discussion" onClick={this.toggleInfo}>Discussion</button>}
                {toggle === "submissions" ?
                  <button className="challenge__toggle-btn challenge__toggle-btn--selected">Submissions</button> :
                  <button className="challenge__toggle-btn" value="submissions" onClick={this.toggleInfo}>Submissions</button>}
                {toggle === "members" ?
                  <button className="challenge__toggle-btn challenge__toggle-btn--selected">Members</button> :
                  <button className="challenge__toggle-btn" value="members" onClick={this.toggleInfo}>Members</button>}
              </div>
            </div>
          </div>
          <div className="challenge-divider" />
        </div>

        {this.state.toggle === "overview" ? <ChallengeOverview info={this.findChallenge()} /> : null}

        {this.state.toggle === "discussion" ? <ChallengeDiscussion info={this.findChallenge()}/> : null}
      </div>
    )
  }
}

import React, { Component } from 'react'
import './Jason_Huang_FrontEnd_Developer_ChallengeSubmission.scss';

export default class ChallengeSubmission extends Component {

  render() {
    return (
      <div className="challenge-submission">
        <div className="challenge-submission__header">
          <h2 className="challenge-submission__title">Submissions</h2>
        </div>
        <div className="challenge-submission__content">
          {this.props.info.submissions.map((item, index) => {
            console.log(item)
            return (
              <div className="challenge-submission__card" key={item.title + index}>
                <img className="challenge-submission__img" src={item.img} alt="submission" />
                <h4 className="challenge-submission__title">{item.title}</h4>
                <p className="challenge-submission__description">{item.description}</p>
                <img className="challenge-submission__user" src={item.user} alt="submission" />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

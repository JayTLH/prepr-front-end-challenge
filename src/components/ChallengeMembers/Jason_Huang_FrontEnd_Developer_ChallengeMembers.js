import React, { Component } from 'react'
import './Jason_Huang_FrontEnd_Developer_ChallengeMembers.scss';

export default class ChallengeMembers extends Component {
  render() {
    return (
      <div className="challenge-members">
        <div className="challenge-members__header">
          <h2 className="challenge-members__title">Admins and Moderators</h2>
        </div>
        <div className="challenge-members__content">
          {this.props.info.members.admins.map((item, index) => {
            return (
              <div className="challenge-members__card" key={item.name + index}>
                <img className="challenge-members__img" src={item.img} alt="admin" />
                <p className="challenge-members__name challenge-members__name--admin">{item.name}</p>
              </div>
            )
          })}
          <div className="challenge-members__header">
            <h2 className="challenge-members__title">General Members</h2>
          </div>
          {this.props.info.members.general.map((item, index) => {
            return (
              <div className="challenge-members__card" key={item.name + index}>
                <img className="challenge-members__img" src={item.img} alt="member" />
                <p className="challenge-members__name">{item.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

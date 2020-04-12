import React, { Component } from 'react';
import './Jason_Huang_FrontEnd_Developer_ChallengeDiscussion.scss';

import user from '../../assets/Jason_Huang_FrontEnd_Developer_profile.png';
import send from '../../assets/Jason_Huang_FrontEnd_Developer_send.png';

export default class ChallengeDiscussion extends Component {
  state = {
    comments: this.props.info.comments
  }

  // adding new comment, only updates state, does not save
  newComment = (event) => {
    event.preventDefault()

    let comment = {
      img: user,
      name: "New Commenter",
      date: "Just now",
      comment: event.target.comment.value
    }

    let updateComments = this.state.comments.slice()
    updateComments.push(comment)

    let newState = {
      comments: updateComments
    }

    this.setState(newState)
    event.target.comment.value = ''
  }

  render() {
    return (
      <div className="challenge-discussion">
        <div className="challenge-discussion__header">
          <h2 className="challenge-discussion__title">Discussion</h2>
        </div>

        <form className="challenge-discussion__form" onSubmit={this.newComment}>
          <textarea className="challenge-discussion__input" type="text" name="comment" placeholder="Add Comment" required/>
          <button className="challenge-discussion__button">
            <img className="challenge-discussion__send" src={send} alt="send" />
          </button>
        </form>

        <div className="challenge-discussion__comments">
          {this.state.comments.slice().reverse().map((item, index) => {
            return (
              <div className="challenge-dicussion__container" key={item.name + index}>
                <div className="challenge-discussion__comment">
                  <img className="challenge-discussion__user" src={item.img} alt="user" />
                  <div className="challenge-discussion__main">
                    <div className="challenge-discussion__info">
                      <p className="challenge-discussion__name">{item.name}</p>
                      <p className="challenge-discussion__date">{item.date}</p>
                    </div>
                    <p className="challenge-discussion__content">{item.comment}</p>
                  </div>
                </div>
                <div className="comment-divider" />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

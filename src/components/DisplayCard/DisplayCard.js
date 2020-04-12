import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DisplayCard.scss';

export default class DisplayCard extends Component {
  render() {
    const { id, img, title, category, description } = this.props.data
    let categoryClass = "display-card__category "
    if (category === "Challenge") {
      categoryClass += "display-card__category--challenge"
    } else if (category === "Lab") {
      categoryClass += "display-card__category--lab"
    } else if (category === "Project") {
      categoryClass += "display-card__category--project"
    }

    if (id) {
      return (
        <Link to={`/challengeManager/${id}`} className="card-link">
          <div className="display-card">
            <div className="display-card__content">
              <img className="display-card__img" src={img} alt="display card" />
              <div className="display-card__info">
                <h3 className="display-card__title">{title}</h3>
                <h4 className={categoryClass}>{category}</h4>
                <p className="display-card__description">{description}</p>
              </div>
            </div>
            <div className="card-divider" />
          </div>
        </Link>
      )
    }

    return (
      <div className="display-card">
        <div className="display-card__content">
          <img className="display-card__img" src={img} alt="display-card" />
          <div className="display-card__info">
            <h3 className="display-card__title">{title}</h3>
            <h4 className={categoryClass}>{category}</h4>
            <p className="display-card__description">{description}</p>
          </div>
        </div>
        <div className="card-divider" />
      </div>
    )
  }
}

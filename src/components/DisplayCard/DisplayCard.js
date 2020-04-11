import React, { Component } from 'react'
import './DisplayCard.scss'

import place from '../../assets/placeholder.jpg'

export default class DisplayCard extends Component {
  render() {
    const { img, title, category, description } = this.props.data

    return (
      <div className="display-card">
        <img className="display-card__img" src={img} alt="display-card" />
        <div className="display-card__info">
          <h3 className="display-card__title">{title}</h3>
          <h4 className="display-card__category">{category}</h4>
          <p className="display-card__description">{description}</p>
        </div>
      </div>
    )
  }
}

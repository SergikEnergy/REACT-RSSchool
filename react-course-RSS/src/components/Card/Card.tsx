import React, { Component } from 'react';

import { IData } from '../../types';
import imgData from '../../data/fakeImgData';
import './card.css';

interface CardProps {
  products: IData;
}

// eslint-disable-next-line react/prefer-stateless-function
class Card extends Component<CardProps> {
  render() {
    const { products } = this.props;
    return (
      <div
        className="card"
        data-testID="cardTest"
        style={{ backgroundImage: `url(${imgData[products.id - 1]})` }}
      >
        <div className="card__title">{products.title}</div>
        <div className="card__description">{products.description}</div>
        <div className="card__price">Price: {products.price}</div>
        <div className="card__rating">Rating: {products.rating}</div>
      </div>
    );
  }
}

export default Card;

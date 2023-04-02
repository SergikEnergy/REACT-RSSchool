import React from 'react';

import { IData } from '../../types';
import imgData from '../../data/fakeImgData';
import './card.css';

interface CardProps {
  products: IData;
}

export default function Card(props: CardProps) {
  const { products } = props;
  return (
    <div
      className="card"
      data-testid="cardTest"
      style={{ backgroundImage: `url(${imgData[products.id - 1]})` }}
    >
      <div className="card__title">{products.title}</div>
      <div className="card__description">{products.description}</div>
      <div className="card__price">Price: {products.price}</div>
      <div className="card__rating">Rating: {products.rating}</div>
    </div>
  );
}

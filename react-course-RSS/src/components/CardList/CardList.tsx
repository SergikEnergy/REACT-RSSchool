import React, { Component } from 'react';

import fakeData from '../../data/fakeData';
import Card from '../Card/Card';
import './cardList.css';

// eslint-disable-next-line react/prefer-stateless-function
class CardList extends Component {
  render() {
    return (
      <div className="cards-list">
        <div className="card-list_wrapper">
          {fakeData.map((item) => (
            <Card key={item.id} products={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;

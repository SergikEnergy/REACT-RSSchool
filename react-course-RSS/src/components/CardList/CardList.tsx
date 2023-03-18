import React, { Component } from 'react';

import fakeData from '../../fakeData';
import Card from '../Card/Card';

// eslint-disable-next-line react/prefer-stateless-function
class CardList extends Component {
  render() {
    return (
      <div className="cards-list">
        <div className="card-list_wrapper">
          {fakeData.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;

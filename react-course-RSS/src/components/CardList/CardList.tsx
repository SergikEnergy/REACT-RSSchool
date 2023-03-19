import React, { Component } from 'react';

import { CardListProps } from '../../types';
import Card from '../Card/Card';
import './cardList.css';

// eslint-disable-next-line react/prefer-stateless-function
class CardList extends Component<CardListProps, any> {
  render() {
    const { data } = this.props;

    return (
      <div className="cards-list">
        <div className="cards-list_wrapper">
          {data && data.length > 0 ? (
            data.map((item) =>
              item && item.id ? <Card key={item.id} products={item} /> : ''
            )
          ) : (
            <div className="cards-list_not-found">
              Oops, nothing was founded!
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CardList;

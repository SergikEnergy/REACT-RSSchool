import React from 'react';

import { CardListProps } from '../../types';
import Card from '../Card/Card';
import './cardList.css';

export default function CardList(props: CardListProps) {
  const { data } = props;

  return (
    <div className="cards-list">
      <div className="cards-list_wrapper">
        {data && data.length > 0 ? (
          data.map((item) => (item && item.id ? <Card key={item.id} products={item} /> : ''))
        ) : (
          <div className="cards-list_not-found" data-testid="emptyCards">
            Oops, nothing was founded!
          </div>
        )}
      </div>
    </div>
  );
}

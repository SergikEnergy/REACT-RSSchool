import React, { Component } from 'react';

import { IData } from '../../types';

// eslint-disable-next-line react/prefer-stateless-function
class Card extends Component<IData> {
  render() {
    const { title } = this.props;
    return (
      <>
        <h1>Hello from card</h1>

        <div>{title}</div>
      </>
    );
  }
}

export default Card;

import React, { Component } from 'react';
import { IUserCard } from '../../types';

import './user.css';

interface UserProps {
  key: string;
  data: IUserCard;
}

// eslint-disable-next-line react/prefer-stateless-function
export default class User extends Component<UserProps> {
  render() {
    const { data } = this.props;

    return (
      <div className="user-cards__item user">
        <img
          className="user__avatar"
          src={data.image}
          alt={`${data.name} avatar`}
        />
        <p className="user__info">Name: {data.name}</p>
        <p className="user__info">Last Name: {data.lastName}</p>
        <p className="user__info">Birthday: {data.birthDay}</p>
        <p className="user__info">Favorite meal: {data.meal}</p>
      </div>
    );
  }
}

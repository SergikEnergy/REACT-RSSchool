import React from 'react';
import { IUserCard } from '../../types';

import './user.css';

interface UserProps {
  data: IUserCard;
}

export default function User(props: UserProps) {
  const { data } = props;
  return (
    <div className="user-cards__item user" data-testid="singleUser">
      <img
        data-testid="userImg"
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

import React from 'react';

import { UsersCardListProps } from '../../types';
import User from '../User/User';
import './usersCardList.css';

export default function UsersCardList(props: UsersCardListProps) {
  const { cards } = props;
  return (
    <div className="users-wrapper" data-testid="TestUserListWrapper">
      {cards.map((user) => {
        return <User key={user.id} data={{ ...user }} />;
      })}
    </div>
  );
}

import React from 'react';
import { useAppSelector } from '../../hooks';

import User from '../User/User';
import './usersCardList.css';

export default function UsersCardList() {
  const cards = useAppSelector((state) => state.usersBase.users);

  return (
    <div className="users-wrapper" data-testid="testUserList">
      {cards.map((user) => {
        return <User key={user.id} data={{ ...user }} />;
      })}
    </div>
  );
}

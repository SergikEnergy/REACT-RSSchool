import React from 'react';

import { UsersCardListProps } from '../../types';
import User from '../User/User';
import './usersCardList.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class UsersCardList extends React.Component<
  UsersCardListProps,
  unknown
> {
  render() {
    const { cards } = this.props;
    return (
      <div className="users-wrapper" data-testid="TestUserListWrapper">
        {cards.map((user) => {
          return <User key={user.id} data={{ ...user }} />;
        })}
      </div>
    );
  }
}

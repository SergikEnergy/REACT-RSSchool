import React, { useState, useCallback } from 'react';
import FormComponent from '../../components/FormComponent/FormComponent';
import UsersCardList from '../../components/UsersCardList/UsersCardList';

import { IUserCard } from '../../types';
import './formPage.css';

export default function FormPage() {
  const [userCards, setUserCards] = useState<IUserCard[]>([]);

  const getUserCard = useCallback(
    (user: IUserCard) => {
      console.log('render callback');
      setUserCards([...userCards, user]);
    },
    [userCards]
  );

  return (
    <main className="form-page" data-testid="form-page">
      <h2 className="form__title">
        Please, fill in this blank to create new user
      </h2>
      <div className="form__wrapper">
        <FormComponent getUserCard={getUserCard} />
        <UsersCardList cards={userCards} />
      </div>
    </main>
  );
}

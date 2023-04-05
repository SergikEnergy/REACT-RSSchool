/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from 'react';

import InputSearchByName from '../../components/inputSearchByName/InputSearchByName';
import APICardsList from '../../components/APICardsList/APICardsList';

import './mainPage.css';

export default function MainPage() {
  const initialSearch = localStorage.getItem('searchParameters') || '';

  const [searchParameters, setSearchParameters] = useState<string>(initialSearch);
  const [cardsList, setCardsList] = useState<string[]>([]);

  const getCardsList = useCallback(
    (cards: any) => {
      setCardsList([...cards]);
    },
    [cardsList]
  );

  const changeSearchParameters = useCallback(
    (params: string) => {
      setSearchParameters(params);
    },
    [searchParameters]
  );

  return (
    <main className="main-page" data-testid="main-page">
      <div className="main-page__wrapper">
        <h1 className="main-page__title">Welcome to the general page</h1>
        <InputSearchByName searchParams={searchParameters} onChangeSearch={changeSearchParameters} />
        <APICardsList searchValue={searchParameters} />
      </div>
    </main>
  );
}

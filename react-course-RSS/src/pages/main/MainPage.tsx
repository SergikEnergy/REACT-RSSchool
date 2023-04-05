import React from 'react';

import InputSearchByName from '../../components/inputSearchByName/InputSearchByName';

import './mainPage.css';

export default function MainPage() {
  return (
    <main className="main-page" data-testid="main-page">
      <div className="main-page__wrapper">
        <h1 className="main-page__title">Welcome to the general page</h1>
        <InputSearchByName />
      </div>
    </main>
  );
}

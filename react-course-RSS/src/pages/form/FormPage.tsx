/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import FormComponent from '../../components/FormComponent/FormComponent';
import UsersCardList from '../../components/UsersCardList/UsersCardList';

import { FormPageState, IUserCard } from '../../types';
import './formPage.css';

// eslint-disable-next-line react/prefer-stateless-function
class FormPage extends Component<unknown, FormPageState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      userCards: [],
    };
    this.getUserCard = this.getUserCard.bind(this);
  }

  getUserCard(user: IUserCard) {
    const { userCards } = this.state;
    this.setState({ userCards: [...userCards, user] });
  }

  render() {
    const { userCards } = this.state;
    return (
      <main className="form-page">
        <h2 className="form__title">
          Please, fill in this blank to create new user
        </h2>
        <div className="form__wrapper">
          <FormComponent getUserCard={this.getUserCard} />
          <UsersCardList cards={userCards} />
        </div>
      </main>
    );
  }
}

export default FormPage;

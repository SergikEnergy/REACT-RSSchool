import React, { createRef, Component } from 'react';

import { FormComponentState } from '../../types';
import InputText from '../UI/InputText/InputText';
import OptionElement from '../UI/OptionElement/OptionElement';
import Switcher from '../UI/Switcher/Switcher';
import SubmitButton from '../UI/Button/SubmitButton';

import './formComponent.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class FormComponent extends Component<
  unknown,
  FormComponentState
> {
  nameField: React.RefObject<HTMLInputElement>;

  lastNameField: React.RefObject<HTMLInputElement>;

  birthDayField: React.RefObject<HTMLInputElement>;

  mealOption: React.RefObject<HTMLSelectElement>;

  switcherField: React.RefObject<HTMLInputElement>;

  constructor(props: unknown) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      birthDay: '',
      meal: '--select your favorite meal--',
      errorName: true,
      errorLastName: true,
      errorBirthDay: true,
      errorMeal: true,
      errorSwitcher: true,
    };

    this.nameField = createRef();
    this.lastNameField = createRef();
    this.birthDayField = createRef();
    this.mealOption = createRef();
    this.switcherField = createRef();

    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(
      this.nameField.current?.value,
      this.lastNameField.current?.value,
      this.birthDayField.current?.value,
      this.mealOption.current?.value,
      this.switcherField.current?.checked
    );
  }

  handlerChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    if (event.target === this.nameField.current) {
      this.setState({ firstName: event.target.value });
    } else if (event.target === this.lastNameField.current) {
      this.setState({ lastName: event.target.value });
    } else if (event.target === this.birthDayField.current) {
      this.setState({ birthDay: event.target.value });
    } else if (
      event.target === this.mealOption.current &&
      this.mealOption.current?.value !== 'default'
    ) {
      this.setState({ meal: event.target.value });
      this.mealOption.current.value = event.target.value;
    } else {
      console.log(this.mealOption.current, event.target);
    }
  }

  render() {
    const {
      firstName,
      lastName,
      errorName,
      errorLastName,
      birthDay,
      errorBirthDay,
      meal,
      errorMeal,
      errorSwitcher,
    } = this.state;
    return (
      <form onSubmit={this.handlerSubmit} className="form-block">
        <InputText
          type="text"
          value={firstName}
          name="nameInput"
          refTo={this.nameField}
          id="nameInput"
          placeholder="-- your name --"
          onChange={this.handlerChange}
          error={errorName}
          label="Name"
        />

        <InputText
          type="text"
          value={lastName}
          name="lastNameInput"
          refTo={this.lastNameField}
          id="lastNameInput"
          placeholder="-- your last name --"
          onChange={this.handlerChange}
          error={errorLastName}
          label="Last Name"
        />

        <InputText
          type="date"
          value={birthDay}
          name="birthDate"
          refTo={this.birthDayField}
          id="birthDayInput"
          placeholder=""
          onChange={this.handlerChange}
          error={errorBirthDay}
          label="Your BirthDay"
        />

        <OptionElement
          refTo={this.mealOption}
          name="meal"
          id="mealSelect"
          value="favoriteMeal"
          variants={[meal, 'MeatBalls', 'Vegetables', 'Crisps', 'FruitPie']}
          error={errorMeal}
          onChange={this.handlerChange}
        />

        <Switcher
          error={errorSwitcher}
          refTo={this.switcherField}
          isToggled={false}
        />

        <SubmitButton />
      </form>
    );
  }
}

//         <div className="file-box">
//           <p className="file__label">Upload the file img</p>
//           <input type="file" className="file__input" />
//         </div>
//
//         <button type="submit" className="form-submit">
//           Create user
//         </button>

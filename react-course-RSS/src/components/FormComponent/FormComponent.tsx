import React, { createRef, Component } from 'react';

import { FormComponentState, FormComponentProps } from '../../types';
import InputText from '../UI/InputText/InputText';
import OptionElement from '../UI/OptionElement/OptionElement';
import Switcher from '../UI/Switcher/Switcher';
import SubmitButton from '../UI/Button/SubmitButton';

import './formComponent.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class FormComponent extends Component<
  FormComponentProps,
  FormComponentState
> {
  public allRefs: {
    wholeForm: React.RefObject<HTMLFormElement>;
    nameField: React.RefObject<HTMLInputElement>;
    lastNameField: React.RefObject<HTMLInputElement>;
    birthDayField: React.RefObject<HTMLInputElement>;
    mealOption: React.RefObject<HTMLSelectElement>;
    switcherField: React.RefObject<HTMLInputElement>;
    fileField: React.RefObject<HTMLInputElement>;
  };

  constructor(props: FormComponentProps) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      birthDay: '',
      meal: '--select your favorite meal--',
      file: null,
      switcher: false,
      errorName: false,
      errorLastName: false,
      errorBirthDay: false,
      errorMeal: false,
      errorSwitcher: false,
      errorFile: false,
    };

    this.allRefs = {
      wholeForm: createRef(),
      nameField: createRef(),
      lastNameField: createRef(),
      birthDayField: createRef(),
      mealOption: createRef(),
      switcherField: createRef(),
      fileField: createRef(),
    };

    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.handleSwitcher = this.handleSwitcher.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handlerSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const isValid = this.validateForm();

    if (isValid) {
      const user = {
        id: Date.now().toString(),
        name: this.allRefs.nameField.current?.value,
        lastName: this.allRefs.lastNameField.current?.value,
        birthDay: this.allRefs.birthDayField.current?.value,
        meal: this.allRefs.mealOption.current?.value,
        image: this.allRefs.fileField.current?.files
          ? URL.createObjectURL(this.allRefs.fileField.current?.files[0])
          : '',
      };
      const { getUserCard } = this.props;
      getUserCard(user);
      this.resetForm();
    }
  }

  handlerChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    if (event.target === this.allRefs.nameField.current) {
      this.setState({ firstName: event.target.value });
    }
    if (event.target === this.allRefs.lastNameField.current) {
      this.setState({ lastName: event.target.value });
    }
    if (event.target === this.allRefs.birthDayField.current) {
      this.setState({ birthDay: event.target.value });
    }
    if (
      event.target === this.allRefs.mealOption.current &&
      this.allRefs.mealOption.current?.value !== 'default'
    ) {
      this.setState({ meal: event.target.value });
      this.allRefs.mealOption.current.value = event.target.value;
    }
  }

  handleSwitcher() {
    this.setState((prevState) => ({ switcher: !prevState.switcher }));
  }

  validateForm() {
    let isValid = true;
    this.setState({
      errorName: false,
      errorLastName: false,
      errorBirthDay: false,
      errorMeal: false,
      errorSwitcher: false,
      errorFile: false,
    });

    if (
      this.allRefs.nameField.current &&
      this.allRefs.nameField.current.value.trim() === ''
    ) {
      this.setState((prevState) => ({ ...prevState, errorName: true }));
      isValid = false;
    }

    if (
      this.allRefs.lastNameField.current &&
      this.allRefs.lastNameField.current.value.trim() === ''
    ) {
      this.setState((prevState) => ({ ...prevState, errorLastName: true }));
      isValid = false;
    }

    if (
      this.allRefs.birthDayField.current &&
      this.allRefs.birthDayField.current.value.trim() === ''
    ) {
      this.setState((prevState) => ({ ...prevState, errorBirthDay: true }));
      isValid = false;
    }

    if (
      (this.allRefs.mealOption.current &&
        this.allRefs.mealOption.current.value === 'default') ||
      (this.allRefs.mealOption.current &&
        this.allRefs.mealOption.current.value === '')
    ) {
      this.setState((prevState) => ({ ...prevState, errorMeal: true }));
      isValid = false;
    }

    if (
      this.allRefs.fileField &&
      this.allRefs.fileField.current &&
      this.allRefs.fileField.current.files &&
      this.allRefs.fileField.current.files.length === 0
    ) {
      this.setState((prevState) => ({ ...prevState, errorFile: true }));
      isValid = false;
    }
    if (
      this.allRefs.switcherField &&
      this.allRefs.switcherField.current &&
      !this.allRefs.switcherField.current.checked
    ) {
      this.setState((prevState) => ({ ...prevState, errorSwitcher: true }));
      isValid = false;
    }

    return isValid;
  }

  resetForm() {
    this.setState({
      firstName: '',
      lastName: '',
      birthDay: '',
      meal: '',
      file: null,
      switcher: false,
    });
    if (this.allRefs.mealOption.current) {
      this.allRefs.mealOption.current.value = '';
    }

    if (this.allRefs.switcherField.current) {
      this.allRefs.switcherField.current.checked = false;
    }

    if (this.allRefs.fileField.current?.files) {
      this.allRefs.fileField.current.value = '';
    }
    this.allRefs.wholeForm.current?.value.reset();
  }

  render() {
    const {
      firstName,
      lastName,
      meal,
      switcher,
      errorName,
      errorLastName,
      birthDay,
      errorBirthDay,
      errorMeal,
      errorSwitcher,
      errorFile,
    } = this.state;

    return (
      <form onSubmit={this.handlerSubmit} className="form-block">
        <InputText
          type="text"
          value={firstName}
          name="nameInput"
          refTo={this.allRefs.nameField}
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
          refTo={this.allRefs.lastNameField}
          id="lastNameInput"
          placeholder="-- your last name --"
          onChange={this.handlerChange}
          error={errorLastName}
          label="Last Name"
        />

        <InputText
          type="date"
          value={birthDay}
          name="birthDay"
          refTo={this.allRefs.birthDayField}
          id="birthDayInput"
          placeholder=""
          onChange={this.handlerChange}
          error={errorBirthDay}
          label="Your BirthDay"
        />
        <InputText
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          name="fileUpload"
          refTo={this.allRefs.fileField}
          id="fileImg"
          onChange={this.handlerChange}
          error={errorFile}
          label="file upload"
        />

        <OptionElement
          refTo={this.allRefs.mealOption}
          name="meal"
          id="mealSelect"
          value={meal}
          variants={[
            '--select your favorite meal--',
            'MeatBalls',
            'Vegetables',
            'Crisps',
            'FruitPie',
          ]}
          error={errorMeal}
          onChange={this.handlerChange}
        />

        <Switcher
          error={errorSwitcher}
          refTo={this.allRefs.switcherField}
          isToggled={switcher}
          onChange={this.handleSwitcher}
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
//

import React, { createRef, Component } from 'react';

import { FormComponentProps, FormComponentState } from '../../types';
import InputText from '../UI/InputText/InputText';
import './formComponent.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class FormComponent extends Component<
  unknown,
  FormComponentState
> {
  nameField: React.RefObject<HTMLInputElement>;

  lastNameField: React.RefObject<HTMLInputElement>;

  birthDayField: React.RefObject<HTMLInputElement>;

  constructor(props: unknown) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      birthDay: '',
      errorName: true,
      errorLastName: true,
      errorBirthDay: true,
    };

    this.nameField = createRef();
    this.lastNameField = createRef();
    this.birthDayField = createRef();

    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(
      this.nameField.current?.value,
      this.lastNameField.current?.value,
      this.birthDayField.current?.value
    );
  }

  handlerChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target === this.nameField.current) {
      this.setState({ firstName: event.target.value });
    } else if (event.target === this.lastNameField.current) {
      this.setState({ lastName: event.target.value });
    } else if (event.target === this.birthDayField.current) {
      this.setState({ birthDay: event.target.value });
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

        <div className="submit-block">
          <button type="submit" className="form-submit">
            Create user
          </button>
        </div>
      </form>
    );
  }
}
// class FormComponent extends Component<FormComponentProps, FormComponentState> {
//   constructor(props: FormComponentProps) {
//     super(props);
//     this.state = {
//       error: {
//         nameError: null,
//         lastNameError: null,
//         birthdayError: null,
//         preferredMealError: null,
//         imgError: null,
//         subscribeError: false,
//       },
//       // eslint-disable-next-line react/no-unused-state
//       values: {
//         name: '',
//         lastName: '',
//         birthday: '',
//         preferredMeal: '',
//         img: null,
//         subscribe: false,
//       },
//     };
// 		this.nameInput=React.createRef();
//   }

//   render() {
//     const { data } = this.props;
//     const { error } = this.state;

//     return (
//       <form>
//         <InputText
//           value={data.name}
//           id="nameInput"
//           placeholder="Your name"
//           name="nameInput"
//           error={error.nameError}
// 					ref=
//         />
//         {/* <div className="name-box">
//           <p className="name__label">Name: </p>
//           <input
//             className="name_input"
//             type="text"
//             name="nameInput"
//             id="nameInput"
//             value={data.name}
//             // onChange={this.props.handleChange}
//             placeholder="Ivan"
//           />

//           <div className="error-name error-box">
//             The field name should be not empty
//           </div>
//         </div> */}
// 				<InputText
//           value={data.name}
//           id="nameInput"
//           placeholder="Your name"
//           name="nameInput"
//           error={error.nameError}
//         />

//         <div className="name-box">
//           <p className="name__label">Last Name: </p>
//           <input
//             className="name_input"
//             type="text"
//             name={data.lastName}
//             value={data.lastName}
//             // onChange={props.handleChange}
//             placeholder="Ivanov"
//           />
//           <div className="error-last_name error-box">
//             The field last name should be not empty
//           </div>
//         </div>
//         <div className="data-box">
//           <p className="data__label">Data of birthday: </p>
//           <input
//             name="date"
//             type="date"
//             className="data__input"
//             value={data.birthday}
//           />
//           <div className="error-data error-box">
//             The field data should be not empty
//           </div>
//         </div>
//         <div className="meal-box">
//           <p className="meal__label">Your favorite meal: </p>
//           <select
//             className="meal__select"
//             name="meal"
//             id="mealSelect"
//             value={data.preferredMeal}
//           >
//             <option
//               className="meal__select_option"
//               value="default"
//               defaultChecked
//             >
//               {data.preferredMeal}
//             </option>
//             <option className="meal__select_option" value="Meatballs">
//               Meatballs
//             </option>
//             <option className="meal__select_option" value="Vegetables">
//               Vegetables
//             </option>
//             <option className="meal__select_option" value="Crisps">
//               Crisps
//             </option>
//             <option className="meal__select_option" value="FruitPie">
//               FruitPie
//             </option>
//           </select>
//           <div className="error-meal error-box">
//             Please, select some options...
//           </div>
//         </div>

//         <div className="file-box">
//           <p className="file__label">Upload the file img</p>
//           <input type="file" className="file__input" />
//         </div>
//         <div className="switcher-box">
//           <label htmlFor="switcher">
//             <input type="checkbox" className="switcher__input" id="switcher" />
//             <div className="switcher__label">
//               <span className="switcher__label_text">Subscribe</span>
//               <p className="switcher__label_description">
//                 Agree to subscribe on smth
//               </p>
//             </div>
//           </label>
//           <div className="switcher-error error-box">Please, checked this</div>
//         </div>
//         <button type="submit" className="form-submit">
//           Create user
//         </button>
//       </form>
//     );
//   }
// }

// export default FormComponent;

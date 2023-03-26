import React, { Component } from 'react';

import { FormComponentProps } from '../../types';

// eslint-disable-next-line react/prefer-stateless-function
class FormComponent extends Component<FormComponentProps, unknown> {
  render() {
    const { data } = this.props;

    return (
      <main>
        <form>
          <div className="name-box">
            <p className="name__label">Name: </p>
            <input
              className="name_input"
              type="text"
              name="nameInput"
              id="nameInput"
              value={data.name}
              // onChange={this.props.handleChange}
              placeholder="Ivan"
            />

            <div className="error-name error-box">
              The field name should be not empty
            </div>
          </div>
          <div className="last_name-box">
            <p className="last-name__label">Last Name: </p>
            <input
              className="last-name_input"
              type="text"
              name={data.lastName}
              value={data.lastName}
              // onChange={props.handleChange}
              placeholder="Ivanov"
            />
            <div className="error-last_name error-box">
              The field last name should be not empty
            </div>
          </div>
          <div className="data-box">
            <p className="data__label">Data of birthday: </p>
            <input
              name="date"
              type="date"
              className="data__input"
              value={data.birthday}
            />
            <div className="error-data error-box">
              The field data should be not empty
            </div>
          </div>
          <div className="meal-box">
            <p className="meal__label">Your favorite meal: </p>
            <select
              className="meal__select"
              name="meal"
              id="mealSelect"
              value={data.preferredMeal}
            >
              <option
                className="meal__select_option"
                value="default"
                defaultChecked
              >
                {data.preferredMeal}
              </option>
              <option className="meal__select_option" value="Meatballs">
                Meatballs
              </option>
              <option className="meal__select_option" value="Vegetables">
                Vegetables
              </option>
              <option className="meal__select_option" value="Crisps">
                Crisps
              </option>
              <option className="meal__select_option" value="FruitPie">
                FruitPie
              </option>
            </select>
            <div className="error-meal error-box">
              Please, select some options...
            </div>
          </div>

          <div className="file-box">
            <p className="file__label">Upload the file img</p>
            <input type="file" className="file__input" />
          </div>
          <div className="switcher-box">
            <label htmlFor="switcher">
              <input
                type="checkbox"
                className="switcher__input"
                id="switcher"
              />
              <div className="switcher__label">
                <span className="switcher__label_text">Subscribe</span>
                <p className="switcher__label_description">
                  Agree to subscribe on smth
                </p>
              </div>
            </label>
            <div className="switcher-error error-box">Please, checked this</div>
          </div>
          <button type="submit" className="form-submit">
            Create user
          </button>
        </form>
      </main>
    );
  }
}

export default FormComponent;

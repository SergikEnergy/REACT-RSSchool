import React, { Component } from 'react';

import { ISortName } from '../../types';
import searchIcon from '../../assets/img/search_icon.png';
import './inputSortByName.css';

// eslint-disable-next-line prettier/prettier, react/prefer-stateless-function
export default class InputSortByName extends Component<any, ISortName> {
  constructor(props: any) {
    super(props);
    this.state = { sortParameters: '' };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState((prevState) => {
      return {
        ...prevState,
        sortParameters: event.target.value,
      };
    });
  }

  render() {
    const { sortParameters } = this.state;

    return (
      <div className="sort__field">
        <input
          type="text"
          name="sortParameters"
          className="sort__field_input"
          id="sortByName"
          placeholder="Input name of item"
          value={sortParameters}
          onChange={this.changeHandler}
        />
        <div className="sort__field_icon">
          <img
            src={searchIcon}
            alt="search items icon"
            className="sort__field_icon-img"
          />
        </div>
      </div>
    );
  }
}

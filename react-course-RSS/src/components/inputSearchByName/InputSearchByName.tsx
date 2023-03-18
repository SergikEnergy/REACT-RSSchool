import React, { Component } from 'react';

import { ISearchName } from '../../types';
import searchIcon from '../../assets/img/search_icon.png';
import './inputSearchByName.css';

// eslint-disable-next-line prettier/prettier, react/prefer-stateless-function
export default class InputSearchByName extends Component<any, ISearchName> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchParameters: localStorage.getItem('searchParameters') || '',
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount(): void {
    const searchParameters = localStorage.getItem('searchParameters') || '';
    this.setState({ searchParameters });
  }

  componentWillUnmount(): void {
    const { searchParameters } = this.state;
    localStorage.setItem('searchParameters', searchParameters);
  }

  changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchParameters: event.target.value,
      };
    });
  }

  render() {
    const { searchParameters } = this.state;

    return (
      <div className="sort__field">
        <input
          type="text"
          name="sortParameters"
          className="sort__field_input"
          id="sortByName"
          placeholder="Input name of item"
          value={searchParameters || ''}
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

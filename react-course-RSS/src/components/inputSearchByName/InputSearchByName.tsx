import React, { Component } from 'react';

import { ISearchName, IData } from '../../types';
import fakeData from '../../data/fakeData';
import searchIcon from '../../assets/img/search_icon.png';
import './inputSearchByName.css';
import CardList from '../CardList/CardList';

const dataArray = [...fakeData];

// eslint-disable-next-line prettier/prettier, react/prefer-stateless-function
export default class InputSearchByName extends Component<unknown, ISearchName> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      searchParameters: localStorage.getItem('searchParameters') || '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    // this.filterDataArray = this.filterDataArray.bind(this);
  }

  componentDidMount(): void {
    const searchParameters = localStorage.getItem('searchParameters') || '';
    this.setState({ searchParameters });
  }

  componentWillUnmount(): void {
    const { searchParameters } = this.state;
    localStorage.setItem('searchParameters', searchParameters);
  }

  // eslint-disable-next-line class-methods-use-this
  filterDataArray(param: string): IData[] | undefined[] {
    if (param && param.length > 0) {
      return dataArray.filter((elem) => {
        return elem.title.toLowerCase().includes(param.toLowerCase());
      });
    }
    return [];
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
      <>
        <div className="sort__field">
          <input
            type="text"
            data-testId="searchName"
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
        <CardList
          data={
            searchParameters.length > 0
              ? this.filterDataArray(searchParameters)
              : fakeData
          }
        />
      </>
    );
  }
}

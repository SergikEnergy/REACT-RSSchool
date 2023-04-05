import React, { useState, useEffect, useRef } from 'react';

import { IData } from '../../types';
import fakeData from '../../data/fakeData';
import searchIcon from '../../assets/img/search_icon.png';
import './inputSearchByName.css';

interface InputSearchByNameProps {
  searchParams: string;
  onChangeSearch: (value: string) => void;
}

const dataArray = [...fakeData];

export default function InputSearchByName(props: InputSearchByNameProps) {
  const { searchParams, onChangeSearch } = props;
  console.log(searchParams, onChangeSearch);
  const searchValue = useRef(searchParams);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchParameters', searchValue.current);
    };
  }, []);

  useEffect(() => {
    searchValue.current = searchParams;
  }, [searchParams]);

  function filterDataArray(param: string): IData[] | undefined[] {
    if (param && param.length > 0) {
      return dataArray.filter((elem) => {
        return elem.title.toLowerCase().includes(param.toLowerCase());
      });
    }
    return [];
  }

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchParameters(event.target.value);
    searchValue.current = event.target.value;
  }

  return (
    <>
      <div className="sort__field">
        <input
          type="text"
          data-testid="searchName"
          name="sortParameters"
          className="sort__field_input"
          id="sortByName"
          placeholder="Input name of item"
          value={searchParameters}
          onChange={changeHandler}
        />
        <div className="sort__field_icon">
          <img src={searchIcon} alt="search items icon" className="sort__field_icon-img" />
        </div>
      </div>
      <CardList data={searchParameters && searchParameters.length > 0 ? filterDataArray(searchParameters) : fakeData} />
    </>
  );
}

/* export default class InputSearchByName extends Component<unknown, ISearchName> {
  constructor(props: unknown) {
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
*/

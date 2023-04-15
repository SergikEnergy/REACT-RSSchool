import React, { useState } from 'react';

import searchIcon from '../../assets/img/search_icon.png';
import './inputSearchByName.css';

interface InputSearchByNameProps {
  searchParams: string;
  onChangeSearch: (value: string) => void;
}

export default function InputSearchByName(props: InputSearchByNameProps) {
  const { searchParams, onChangeSearch } = props;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentInputValue, setCurrentInputValue] = useState<string>(searchParams);

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentInputValue(event.target.value);
    setIsLoading(false);
  }

  function submitHandler(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    onChangeSearch(currentInputValue);
    localStorage.setItem('searchParameters', currentInputValue);
    setIsLoading(true);
  }

  return (
    <div className="sort__field_wrapper">
      <form className="sort__field_form" onSubmit={submitHandler} data-testid="formNameTest">
        <label htmlFor="sortByName">
          <input
            type="text"
            data-testid="searchName"
            name="sortParameters"
            className="sort__field_input"
            id="sortByName"
            placeholder="Input name of item"
            value={currentInputValue}
            onChange={changeHandler}
          />
        </label>
        <div className="sort__field_icon">
          <img src={searchIcon} alt="search items icon" className="sort__field_icon-img" />
        </div>
        <button type="submit" disabled={isLoading} className="sort__field_submit" data-testid="submitButton">
          Search
        </button>
      </form>
    </div>
  );
}

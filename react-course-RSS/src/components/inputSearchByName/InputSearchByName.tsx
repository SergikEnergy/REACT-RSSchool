import React, { useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSearchParams } from '../../store/searchParamsSlice';

import searchIcon from '../../assets/img/search_icon.png';

export default function InputSearchByName() {
  const currentInputValue = useAppSelector((state) => state.searchParams.searchValue);
  const dispatch = useAppDispatch();

  const inputNameRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function changeHandler() {
    setIsLoading(false);
  }

  function submitHandler(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inputNameRef.current) {
      dispatch(setSearchParams(inputNameRef.current.value.trim()));
    }
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
            defaultValue={currentInputValue}
            ref={inputNameRef}
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

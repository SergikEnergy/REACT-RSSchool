import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useGetAllCharacterQuery, useGetCharacterByNameQuery } from '../../services/APIServiceRTQ';
import { getAnotherCharacter, getCharacterId } from '../../store/characterSlice';

import './apiCardsList.css';

import NotData from '../NotData/NotData';
import Preloader from '../PreLoader/Preloader';
import Person from '../Person/Person';
import ModalWindow from '../ModalWindow/ModalWindow';
import useModalWindow from '../../hooks/useModalWindow';
import PersonDetails from '../PersonDetails/PersonDetails';

export default function APICardsList() {
  const searchValue = useAppSelector((state) => state.searchParams.searchValue);
  const characters = useAppSelector((state) => state.characters.character);

  const { isOpen, toggle } = useModalWindow();

  const [isErrorData, setIsErrorData] = useState<boolean>(false);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const { data: dataInitial, error: errorInitial, isFetching: isFetchingInitial } = useGetAllCharacterQuery();

  const { data: dataFilterByName, error: errorFilterByName, isFetching: isFetchingByName } = useGetCharacterByNameQuery(searchValue);

  useEffect(() => {
    if (searchValue.trim() === '' && dataInitial) {
      dispatch(getAnotherCharacter(dataInitial.results));
    }
  }, [dispatch, dataInitial, searchValue]);

  useEffect(() => {
    if (searchValue.trim() !== '' && dataFilterByName && dataFilterByName.results) {
      dispatch(getAnotherCharacter(dataFilterByName.results));
    }
  }, [dispatch, dataFilterByName, searchValue, errorFilterByName]);

  useEffect(() => {
    if (isFetchingInitial || isFetchingByName) setIsLoadingData(true);
    else if (!isFetchingInitial || !isFetchingByName) setIsLoadingData(false);
  }, [isFetchingInitial, isFetchingByName]);

  useEffect(() => {
    if (errorInitial || errorFilterByName) setIsErrorData(true);
    else if (!errorInitial || !errorFilterByName) setIsErrorData(false);
  }, [errorInitial, errorFilterByName]);

  if (isLoadingData) return <Preloader />;

  if (isErrorData || (dataInitial && dataInitial.error) || (dataFilterByName && dataFilterByName.error)) {
    return <NotData />;
  }

  return (
    <>
      <ModalWindow isOpen={isOpen} closeWindow={toggle}>
        <PersonDetails />
      </ModalWindow>
      <div className="cards-api">
        <div className="cards-api_wrapper">
          {characters
            ? characters.map((item) =>
                item && item.id ? (
                  <Person
                    key={item.id}
                    data={item}
                    click={() => {
                      toggle();
                      dispatch(getCharacterId(item.id));
                    }}
                  />
                ) : (
                  ''
                )
              )
            : ''}
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useGetCharacterByNameQuery } from '../../services/APIServiceRTQ';
import { getCharacterId } from '../../store/characterSlice';

import NotData from '../NotData/NotData';
import Preloader from '../PreLoader/Preloader';
import Person from '../Person/Person';
import ModalWindow from '../ModalWindow/ModalWindow';
import useModalWindow from '../../hooks/useModalWindow';
import PersonDetails from '../PersonDetails/PersonDetails';

export default function APICardsList() {
  const searchValue = useAppSelector((state) => state.searchParams.searchValue);
  const [name, setName] = useState('');
  const dispatch = useAppDispatch();

  const { isOpen, toggle } = useModalWindow();

  useEffect(() => {
    setName(searchValue);
  }, [searchValue]);

  const { data, isError, isFetching } = useGetCharacterByNameQuery(name);

  if (isFetching) return <Preloader />;

  if (isError || (data && data.error)) {
    return <NotData />;
  }

  return (
    <>
      <div className="cards-api">
        <div className="cards-api_wrapper">
          {data && data.results
            ? data.results.map((item) =>
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
      <ModalWindow isOpen={isOpen} closeWindow={toggle}>
        <PersonDetails />
      </ModalWindow>
    </>
  );
}

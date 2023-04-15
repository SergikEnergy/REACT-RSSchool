import React, { useState } from 'react';

import useFetchData from '../../hooks/useFetchData';

import './apiCardsList.css';

import NotData from '../NotData/NotData';
import Preloader from '../PreLoader/Preloader';
import Person from '../Person/Person';
import ModalWindow from '../ModalWindow/ModalWindow';
import useModalWindow from '../../hooks/useModalWindow';
import PersonDetails from '../PersonDetails/PersonDetails';

interface APICardsListProps {
  searchValue: string;
}

export default function APICardsList(props: APICardsListProps) {
  const { searchValue } = props;
  const { isOpen, toggle } = useModalWindow();
  const [clickedElem, setClickedElem] = useState(0);

  const { characters, error, isLoading } = useFetchData(searchValue);

  if (isLoading) return <Preloader />;

  if (error || (characters && characters.error)) return <NotData />;

  return (
    <>
      <ModalWindow isOpen={isOpen} closeWindow={toggle}>
        <PersonDetails id={clickedElem} />
      </ModalWindow>
      <div className="cards-api">
        <div className="cards-api_wrapper">
          {characters && characters.results
            ? characters.results.map((item) =>
                item && item.id ? (
                  <Person
                    key={item.id}
                    data={item}
                    click={() => {
                      toggle();
                      setClickedElem(item.id);
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

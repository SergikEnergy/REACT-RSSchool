import { useState, useEffect } from 'react';

import { IDataError, IDataFromAPI, ISingleDataFromAPI } from '../types';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export default function useFetchData(name = '') {
  const [characters, setCharacters] = useState<IDataError | IDataFromAPI | null>(null);
  const [error, setError] = useState<IDataError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${BASE_URL}?name=${name}`)
      .then((res) => {
        return res.json();
      })
      .then((data: IDataFromAPI | IDataError) => {
        setCharacters(data);
      })
      .catch((err: Error) => {
        setError({ error: 'failed via fetching all data', errorMessage: err.message });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [name]);

  return { characters, error, isLoading };
}

export function useFetchSingleData(id: string) {
  const [character, setCharacter] = useState<ISingleDataFromAPI | null>(null);
  const [error, setError] = useState<IDataError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${BASE_URL}${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data: ISingleDataFromAPI) => {
        setCharacter(data);
      })
      .catch((err: Error) => {
        setError({ error: `failed via fetching data with id=${id}`, errorMessage: err.message });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { character, error, isLoading };
}

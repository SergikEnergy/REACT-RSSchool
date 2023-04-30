import { IUserCard } from '../types';

const fakeUserList: IUserCard[] = [
  {
    social: 'Instagram',
    id: 'id1',
    name: 'Ivan',
    lastName: 'Ivanov',
    birthDay: '12-03-1990',
    meal: 'pie',
    image: 'some_url',
  },
  {
    id: 'id2',
    social: 'Telegram',
    name: 'Petr',
    lastName: 'Petrov',
    birthDay: '12-03-1990',
    meal: 'pie',
    image: 'some_url2',
  },
  {
    id: 'id3',
    social: 'Facebook',
    name: 'Serg',
    lastName: 'Sergeev',
    birthDay: '12-03-1990',
    meal: 'pie',
    image: 'some_url',
  },
];
export default fakeUserList;

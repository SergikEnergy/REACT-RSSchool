export default interface IActiveLink {
  isActive: boolean;
  // eslint-disable-next-line semi
}

export interface ISearchName {
  searchParameters: string;
}

export interface IData {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  img?: string;
}

export interface CardListProps {
  data: IData[] | undefined[];
}

export interface IUserCard {
  id: string;
  name: string | undefined;
  lastName: string | undefined;
  birthDay: string | undefined;
  meal: string | undefined;
  social: string;
  image: string;
}
export interface FormPageState {
  userCards: IUserCard[];
}
export interface FormComponentProps {
  getUserCard: (user: IUserCard) => void;
}

export interface InputTextProps {
  type: string;
  value?: string;
  accept?: string;
  name: string;
  refTo: React.RefObject<HTMLInputElement>;
  id: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error: boolean;
  label: string;
}
export interface InputTextState {
  value: string;
}
export interface IErrorForm {
  nameError: string | null;
  lastNameError: string | null;
  birthdayError: string | null;
  preferredMealError: string | null;
  imgError: string | null;
  subscribeError: boolean;
}
export interface FormComponentState {
  firstName: string;
  errorName: boolean;
  lastName: string;
  errorLastName: boolean;
  birthDay: string;
  errorBirthDay: boolean;
  meal: string;
  file: string | null;
  errorMeal: boolean;
  switcher: boolean;
  errorSwitcher: boolean;
  img?: string | null;
  errorFile: boolean;
}
export interface FormFields {
  firstName: string;
  lastName: string;
  birthDay: string;
  meal: string;
  file: FileList | '';
  social: string;
  switcher: boolean;
  img?: string | null;
}

export interface OptionElementProps {
  name: string;
  id: string;
  value: string;
  variants: string[];
  error: boolean;
  refTo: React.RefObject<HTMLSelectElement>;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export interface OptionElementState {
  value: string;
}

export interface SwitcherProps {
  refTo: React.RefObject<HTMLInputElement>;
  error: boolean;
  isToggled: boolean;
  onChange: () => void;
}

export interface SwitcherState {
  switchState: boolean;
}

export interface UsersCardListProps {
  cards: IUserCard[];
}

export interface ISingleDataFromAPI {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  created: string;
  error: string;
  errorMessage?: string;
}

export interface IDataFromAPI {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | number;
  };
  results: ISingleDataFromAPI[];
  error?: string;
}

export interface IDataError {
  error: string;
  errorMessage?: string;
  results?: ISingleDataFromAPI[];
}

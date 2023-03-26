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

export interface FormPageState {
  firstName: string;

  lastName?: string;
  birthday?: string;
  preferredMeal?: string;
  img?: string | null;
  subscribe?: boolean;
}
export interface FormComponentProps {
  data: FormPageState;
}

export interface InputTextProps {
  value: string;
  name: string;
  refTo: React.RefObject<HTMLInputElement>;
  id: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
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
  lastName?: string;
  birthday?: string;
  preferredMeal?: string;
  img?: string | null;
  subscribe?: boolean;
}

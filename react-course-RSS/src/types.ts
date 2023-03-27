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
  type: string;
  value?: string;
  accept?: string;
  name: string;
  refTo: React.RefObject<HTMLInputElement>;
  id: string;
  placeholder?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
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

export interface OptionElementProps {
  name: string;
  id: string;
  value: string;
  variants: string[];
  error: boolean;
  refTo: React.RefObject<HTMLSelectElement>;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
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

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
  name: string;
  lastName: string;
  birthday: string;
  preferredMeal: string;
  img: string | null;
  subscribe: boolean;
}
export interface FormComponentProps {
  data: FormPageState;
}

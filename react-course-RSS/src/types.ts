export default interface IActiveLink {
  isActive: boolean;
}

export interface ISortName {
  sortParameters: string;
}

export interface IData {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  img?: string;
}

import { IData } from '../types';

export default function filterDataArray(param: string, data: IData[]): IData[] | undefined[] {
  if (param && param.length > 0) {
    return data.filter((elem) => {
      return elem.title.toLowerCase().includes(param.toLowerCase());
    });
  }
  return [];
}

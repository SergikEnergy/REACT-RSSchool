import { ISingleDataFromAPI } from '../../types';
import './person.css';

interface PersonProps {
  data: ISingleDataFromAPI;
  click: () => void;
}

export default function Person(props: PersonProps) {
  const { data, click } = props;

  return (
    <div className="person-card" onClick={click} role="presentation">
      <div className="person-card__title">{data.name}</div>
      <div className="person-card__avatar">
        <img src={data.image} alt="person avatar" />
      </div>
      <div className="person-card__info">{data.species}</div>
    </div>
  );
}

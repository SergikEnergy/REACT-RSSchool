import { useFetchSingleData } from '../../hooks/useFetchData';
import Preloader from '../PreLoader/Preloader';
import NotData from '../NotData/NotData';
import './personDetails.css';

interface PersonDetailsProps {
  id: number;
}

export default function PersonDetails(props: PersonDetailsProps) {
  const { id } = props;

  const { character, error, isLoading } = useFetchSingleData(`${id}`);

  if (isLoading) return <Preloader />;

  if (error || (character && character.error)) return <NotData />;

  return (
    <div className="person">
      <div className="person__img">
        <img src={character?.image} alt={`avatar_${id}`} className="person_avatar" />
      </div>
      <div className="person__info">
        <div className="person__name" data-testid="testNameSingle">
          Name: {character?.name}
        </div>
        <div className="person__gender">Gender: {character?.gender}</div>
        <div className="person__species">Species: {character?.species}</div>
        <div className="person__created">Created at: {character?.created}</div>
      </div>
    </div>
  );
}

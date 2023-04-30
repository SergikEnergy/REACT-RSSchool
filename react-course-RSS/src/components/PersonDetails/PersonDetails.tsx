import { useAppSelector } from '../../hooks';
import { useGetCharacterByIdQuery } from '../../services/APIServiceRTQ';
import Preloader from '../PreLoader/Preloader';
import NotData from '../NotData/NotData';

export default function PersonDetails() {
  const id = useAppSelector((state) => state.characters.id);
  const { data: character, error, isFetching: isLoading } = useGetCharacterByIdQuery(id);

  if (isLoading) return <Preloader />;

  if (error || (character && character.error)) return <NotData />;

  return (
    <div className="person">
      <div className="person__img">
        <img src={character ? character.image : ''} alt={`avatar_${id}`} className="person_avatar" />
      </div>
      <div className="person__info">
        <div className="person__name" data-testid="testNameSingle">
          Name: {character ? character.name : ''}
        </div>
        <div className="person__gender">Gender: {character ? character.gender : ''}</div>
        <div className="person__species">Species: {character ? character.species : ''}</div>
        <div className="person__created">Created at: {character ? character.created : ''}</div>
      </div>
    </div>
  );
}

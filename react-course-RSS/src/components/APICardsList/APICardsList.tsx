import './apiCardsList.css';
import NotFoundAPI from '../notFoundAPI/notFoundAPI';

interface APICardsListProps {
  searchValue: string;
}

export default function APICardsList(props: APICardsListProps) {
  const { searchValue } = props;
  console.log(searchValue);

  return (
    <div className="cards-api">
      <div className="cards-api_wrapper">
        Hello from API
        {/* {data && data.length > 0 ? data.map((item) => (item && item.id ? <Card key={item.id} products={item} /> : '')) : ''} */}
      </div>
      <NotFoundAPI />
    </div>
  );
}

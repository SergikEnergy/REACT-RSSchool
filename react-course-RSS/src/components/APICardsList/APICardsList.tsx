import './apiCardsList.css';

export default function APICardsList(props: any) {
  const { searchValue } = props;
  console.log(searchValue);

  return (
    <div className="cards-api">
      <div className="cards-api_wrapper">
        Hello from API
        {/* {data && data.length > 0 ? data.map((item) => (item && item.id ? <Card key={item.id} products={item} /> : '')) : ''} */}
      </div>
      <div className="cards-api_not-found" data-testid="emptyApi">
        Oops, nothing was founded!
      </div>
    </div>
  );
}

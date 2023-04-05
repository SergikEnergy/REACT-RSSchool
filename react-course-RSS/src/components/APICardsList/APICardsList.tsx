import './apiCardsList.css';

export default function APICardsList(props: any) {
  const { data } = props;
  console.log(data);

  return (
    <div className="cards-api">
      <div className="cards-api_wrapper">
        {/* {data && data.length > 0 ? data.map((item) => (item && item.id ? <Card key={item.id} products={item} /> : '')) : ''} */}
      </div>
      <div className="cards-api_not-found" data-testid="emptyApi">
        Oops, nothing was founded!
      </div>
    </div>
  );
}

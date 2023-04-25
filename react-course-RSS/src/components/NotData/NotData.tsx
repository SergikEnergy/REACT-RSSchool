import imgNotFoundAPI from '../../assets/img/notFoundAPI_img.jpeg';

export default function NotFoundAPI() {
  return (
    <div className="api_not-found" data-testid="emptyApi">
      <div className="api_not-found__title">Oops, nothing was founded!</div>
      <div className="api_not-found__picture">
        <img src={imgNotFoundAPI} alt="not-found" className="api_not-found__img" />
      </div>
    </div>
  );
}

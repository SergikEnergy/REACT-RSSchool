import FormComponent from '../../components/FormComponent/FormComponent';
import UsersCardList from '../../components/UsersCardList/UsersCardList';

import './formPage.css';

export default function FormPage() {
  return (
    <main className="form-page" data-testid="form-page">
      <h2 className="form__title">Please, fill in this blank to create new user</h2>
      <div className="form__wrapper">
        <FormComponent />
        <UsersCardList />
      </div>
    </main>
  );
}

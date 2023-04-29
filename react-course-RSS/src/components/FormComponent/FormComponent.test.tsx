import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { describe, test, vi } from 'vitest';
import * as reduxHooks from 'react-redux';
// import * as actions from '../../store/usersSlice';
import { setupStore } from '../../store';
import FormComponent from './FormComponent';

const store = setupStore();
global.URL.createObjectURL = vi.fn();
vi.mock('react-redux');

const mockedDispatch = vi.spyOn(reduxHooks, 'useDispatch');

describe('test Form Component', () => {
  const foo = vi.fn();
  mockedDispatch.mockReturnValue(foo);

  // const mockedAddNewUser = vi.spyOn(actions, 'addNewUser');

  test('should render form page', () => {
    render(
      <reduxHooks.Provider store={store}>
        <FormComponent />
      </reduxHooks.Provider>
    );
    const formId = 'formTag';
    const formPage = screen.getByTestId(formId);
    expect(formPage).toBeInTheDocument();
  });
  test('should render all Inputs', async () => {
    render(
      <reduxHooks.Provider store={store}>
        <FormComponent />
      </reduxHooks.Provider>
    );
    expect(await screen.findByTestId('firstNameTest')).toBeInTheDocument();
    expect(await screen.findByTestId('lastNameTest')).toBeInTheDocument();
    expect(await screen.findByTestId('birthDayTest')).toBeInTheDocument();
    expect(await screen.findByTestId('fileTest')).toBeInTheDocument();
    expect(await screen.findByTestId('mealSelect')).toBeInTheDocument();
    expect(await screen.findByTestId('switcherTest')).toBeInTheDocument();
  });
  test('should display required error when value is invalid', async () => {
    render(
      <reduxHooks.Provider store={store}>
        <FormComponent />
      </reduxHooks.Provider>
    );
    fireEvent.submit(screen.getByRole('button'));
    expect(await screen.findByTestId('switcherError')).toBeInTheDocument();
  });
  test('submitting form', () => {
    const fileForTest = new File(['test'], 'testImage.jpg', {
      type: 'image/jpg',
    });

    render(
      <reduxHooks.Provider store={store}>
        <FormComponent />
      </reduxHooks.Provider>
    );

    fireEvent.change(screen.getByTestId('firstNameTest'), {
      target: { value: 'userTestName' },
    });
    fireEvent.change(screen.getByTestId('lastNameTest'), {
      target: { value: 'testUserLastName' },
    });
    fireEvent.change(screen.getByTestId('birthDayTest'), {
      target: { value: '2020-08-05' },
    });
    fireEvent.change(screen.getByTestId('fileTest'), {
      target: { files: [fileForTest] },
    });
    fireEvent.change(screen.getByTestId('mealSelect'), {
      target: { value: 'Vegetables' },
    });
    fireEvent.click(screen.getByTestId('InstagramTest'));
    fireEvent.click(screen.getByTestId('switcherTest'));
    fireEvent.click(screen.getByTestId('buttonTest'));
  });

  waitFor(() => {
    const userName = screen.findByTestId('firstNameTest');
    expect(userName).toHaveValue('userTestName');
    expect(userName).toBeInTheDocument();
    expect(foo).toHaveBeenCalledTimes(1);
  });
});

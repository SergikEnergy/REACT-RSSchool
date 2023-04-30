import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, vi } from 'vitest';
import { Provider } from 'react-redux';
import { setupStore } from '../../store';
import '@testing-library/jest-dom';
import FormComponent from '../../components/FormComponent/FormComponent';

const store = setupStore();
global.URL.createObjectURL = vi.fn();

describe('test Form Component', () => {
  const addUser = vi.fn();

  test('should render form page', async () => {
    render(
      <Provider store={store}>
        <FormComponent />
      </Provider>
    );
    const formId = 'formTag';
    const formPage = await screen.findByTestId(formId);
    expect(formPage).toBeInTheDocument();
  });
  test('should render all Inputs', async () => {
    render(
      <Provider store={store}>
        <FormComponent />
      </Provider>
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
      <Provider store={store}>
        <FormComponent />
      </Provider>
    );
    fireEvent.submit(screen.getByRole('button'));
    expect(await screen.findByTestId('switcherError')).toBeInTheDocument();
  });
  test('submitting form', async () => {
    const fileForTest = new File(['test'], 'testImage.jpg', {
      type: 'image/jpg',
    });

    render(
      <Provider store={store}>
        <FormComponent />
      </Provider>
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

    waitFor(() => {
      const userName = screen.findByTestId('firstNameTest');
      expect(userName).toHaveValue('userTestName');
      expect(userName).toBeInTheDocument();
      expect(addUser).toHaveBeenCalledTimes(1);
    });
  });
});

import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import NotFound from './NotFound';

describe('render notFound Page test', () => {
  test('renders Go Home Link', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const linkHomeId = 'home_link';
    const linkElement = screen.getByTestId(linkHomeId);
    expect(linkElement).toBeInTheDocument();
  });

  test('should have heading', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent(/not found/i);
  });

  const urlToImg = 'assets/img/404.png';
  const testImgId = 'imgNotFound';
  test('should have loaded img', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const imgElem = screen.getByTestId(testImgId) as HTMLImageElement;
    expect(imgElem).toBeInTheDocument();
    expect(imgElem.src).toContain(urlToImg);
  });
});

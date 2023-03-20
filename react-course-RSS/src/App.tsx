import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainPage from './pages/main/MainPage';
import AboutPage from './pages/about/AboutPage';
import NotFound from './pages/404/NotFound';
import Layout from './components/layout/Layout';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="home" element={<MainPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainPage from './pages/main/MainPage';
import AboutPage from './pages/about/AboutPage';
import NotFound from './pages/404/NotFound';
import Layout from './components/layout/Layout';
import FormPage from './pages/form/FormPage';
import ModalWindow from './components/ModalWindow/ModalWindow';
import useModalWindow from './hooks/useModalWindow';

export default function App() {
  const { isOpen, toggle } = useModalWindow();

  return (
    <>
      <button type="button" onClick={toggle}>
        Show Modal
      </button>
      <ModalWindow isOpen={isOpen} closeWindow={toggle}>
        Some Text
      </ModalWindow>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="home" element={<MainPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="404" element={<NotFound />} />
            <Route path="form" element={<FormPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

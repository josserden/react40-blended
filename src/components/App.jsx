import { Routes, Route, Navigate, Router } from 'react-router-dom';
import { Suspense } from 'react';

import { Container } from '@chakra-ui/react';
import Layout from 'components/Layout';
import Home from 'views/Home';
import ContactPage from 'views/ContactPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact-page" element={<ContactPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};

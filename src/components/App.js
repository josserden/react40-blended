import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from 'views/Home';
import Layout from 'components/Layout';
import TodoDetail from 'views/TodoDetail';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:todoId" element={<TodoDetail />} />

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

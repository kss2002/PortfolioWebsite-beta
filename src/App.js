import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
// router-dom <- 페이지 이동 import
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
};
// router-dom 기본 문법
export default App;

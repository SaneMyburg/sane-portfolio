import React from 'react';
import './App.css';
import './Hello.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;

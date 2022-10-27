import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import AddressPage from './pages/AddressPage';

const App = () => {
  return (
    <Routes>
      <Route path = '/' element = {<HomePage/>}></Route>
      <Route path = '/address' element = {<AddressPage/>}></Route>   
    </Routes>
  );
};

export default App;
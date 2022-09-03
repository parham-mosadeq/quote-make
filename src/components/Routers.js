import React from 'react';
// Router
import { Routes, Route, Navigate } from 'react-router-dom';
// Component
import RandomQuotes from './RandomQuotes';
import Authors from './Authors';
import Notfound from './Notfound';
import Categories from './Categories';
import Quotes from './Quotes';
import ContactMe from './ContactMe';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<RandomQuotes />}></Route>
      <Route path='authors' element={<Authors />}></Route>
      <Route path='categories' element={<Categories />}></Route>
      <Route path='quotes' element={<Quotes />}></Route>
      <Route path='contact-me' element={<ContactMe />}></Route>
      <Route path='*' element={<Navigate to={<Notfound />} />}></Route>
    </Routes>
  );
};

export default Routers;

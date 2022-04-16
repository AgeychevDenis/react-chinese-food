import React from 'react';

import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';



function App() {
  return (
    <section className="catalog">
      <Route path="/" component={Home} exact />
      <Route path="/cart" component={Cart} exact />
    </section >
  );
};

export default App;


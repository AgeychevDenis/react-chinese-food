import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { setFoods } from './redux/actions/foods';


function App() {
  const dispatch = useDispatch();


  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setFoods(data.foods))
    });
  }, []);

  return (
    <section className="catalog">
      <Route path="/" component={Home} exact />
      <Route path="/cart" component={Cart} exact />
    </section >
  );
};

export default App;


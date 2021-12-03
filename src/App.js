import React from 'react';
// import Button from './components/Button'

import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';


function App() {
  const [foods, setFoods] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setFoods(json.foods);
      })
  }, []);

  return (
    <section className="catalog">
      <Route path="/" render={() => <Home items={foods} />} exact />
      <Route path="/cart" component={Cart} exact />
    </section >
  );
}

export default App;

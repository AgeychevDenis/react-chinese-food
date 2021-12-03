import React from 'react';
// import Button from './components/Button'


// import img2 from './assets/img/card__img/img-2.png'
// import img3 from './assets/img/card__img/img-3.png'
// import img4 from './assets/img/card__img/img-4.png'

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

  console.log(foods);

  return (
    <section className="catalog">
      <Route path="/" render={() => <Home items={foods} />} exact />
      <Route path="/cart" component={Cart} exact />
    </section >
  );
}

export default App;

import React from 'react';

import { Home, Cart } from './pages';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { setFoods } from './redux/actions/foods';
import { connect } from 'react-redux';


class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setFoods(data.foods);
    });
  }
  render() {
    console.log(this.props);
    return (
      <section className="catalog">
        <Route path="/" render={() => <Home items={this.props.items} />} exact />
        <Route path="/cart" component={Cart} exact />
      </section >
    );
  }
}
export default connect(
  (state) => {
    return {
      items: state.foods.items,
    };
  },
  (dispatch) => {
    return {
      setFoods: (items) => dispatch(setFoods(items)),
    };
  },
)(App);

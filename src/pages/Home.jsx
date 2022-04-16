import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import obj from '../assets/img/db.json'

import basket from '../assets/img/icon/basket.svg'
import { FoodBlock, FoodLoadingBlock } from '../components'
import { fetchFoods } from '../redux/actions/foods';

function Home() {
   const dispatch = useDispatch();
   // const items = useSelector(({ foods }) => foods.items);
   const items = obj.foods; // Для работы без json-server
   const isLoaded = useSelector(({ foods }) => foods.isLoaded);
   const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

   const handleAddFoodToCart = (obj) => {
      dispatch({
         type: 'ADD_FOOD_CART',
         payload: obj,
      });
   };

   React.useEffect(() => {
      dispatch(fetchFoods())
   }, [dispatch]);

   return (
      <div className="container">
         <div className="catalog__block">
            <h1 className="catalog__title">наша продукция</h1>
            <div className="catalog__basket">
               <div className="catalog__basket-items">
                  <span>{totalCount} товара</span>
                  <span>на сумму {totalPrice} ₽</span>
               </div>
               <Link to="/cart">
                  <button className="catalog__basket-img" >
                     <img src={basket} alt="Корзина" />
                  </button>
               </Link>
            </div>
         </div>
         <div className="catalog__inner product-item">
            {isLoaded ? items.map((obj) => <FoodBlock
               onClickAddFood={handleAddFoodToCart}
               key={obj.id}
               {...obj} />
            )
               : Array(8)
                  .fill(0)
                  .map((_, index) => <FoodLoadingBlock key={index} />)}
         </div>
      </div>
   )
}



export default Home

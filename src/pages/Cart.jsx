import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { CartItem } from '../components';
import { clearCart, removeCartItem } from "../redux/actions/cart"
import icon from '../assets/img/icon/add_shopping.svg'

function Card() {
   const dispatch = useDispatch()
   const { totalPrice, items } = useSelector(({ cart }) => cart);

   const addedFoods = Object.keys(items).map(key => {
      return items[key].items[0];
   });

   const onRemoveItem = (id) => {
      if (window.confirm('Вы действительно хотите удалить?')) {
         dispatch(removeCartItem(id));
      }
   }

   return (
      <main className="cart">
         <div className="cart__container">
            {
               totalPrice ? <div className="cart__top cart-item">
                  <h1 className="cart__title">Корзина с выбранными товарами</h1>
                  {addedFoods.map(obj =>
                  (<CartItem
                     key={obj.id}
                     id={obj.id}
                     name={obj.name}
                     imageUrl={obj.imageUrl}
                     totalPrice={items[obj.id].totalPrice}
                     totalCount={items[obj.id].items.length}
                     onRemove={onRemoveItem}
                  />))}
               </div> : <div className="cart__add">
                  <h2>Корзина пустая
                  </h2>
                  <p>
                     Вероятней всего, вы не заказывали ещё наши блюда.
                     Для того, чтобы заказать, перейди на главную страницу.
                  </p>
                  <img src={icon} alt="Корзина пуста" />
                  <Link to="/" className="cart__add-link">Вернуться назад</Link>
               </div>
            }

            <div className="cart__bottom">
               <p className="cart__price-total">
                  Заказ на сумму: <span>{totalPrice} ₽</span>
               </p>
               <a href="#">Оформить заказ</a>
            </div>
         </div>
      </main>
   )
}

export default Card

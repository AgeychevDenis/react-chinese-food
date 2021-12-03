import React from 'react'

import basket from '../assets/img/icon/basket.svg'
import { FoodBlock } from '../components'

function Home({ items }) {
   return (
      <div className="container">
         <div className="catalog__block">
            <h1 className="catalog__title">наша продукция</h1>
            <div className="catalog__basket">
               {/* <Button className="button--cart"> */}
               <div className="catalog__basket-items">
                  <span>3 товара</span>
                  <span>на сумму 3 500 ₽</span>
               </div>
               <a className="catalog__basket-img" href="shopping_cart.html"><img src={basket}
                  alt="Корзина" /></a>
               {/* </Button> */}
            </div>
         </div>
         <div className="catalog__inner product-item">
            {items.map((obj) => (
               <FoodBlock key={obj.id} {...obj} />
            ))}
         </div>
      </div>
   )
}

export default Home

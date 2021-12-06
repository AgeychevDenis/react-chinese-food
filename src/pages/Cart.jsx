import React from 'react'

function Card() {
   return (
      <main className="cart">
         <div className="cart__container">
            <h1 className="cart__title">Корзина с выбранными товарами</h1>
            <div className="cart__top cart-item">
               <div className="cart-item__wrapper">
                  <div className="cart-item__img">
                     <img src="img/card__img/img-1.png" alt="Устрицы по рокфеллеровски" />
                  </div>
                  <h4 className="cart-item__title">Устрицы по рокфеллеровски</h4>
                  <div className="cart-item__price">
                     <p>2 700 ₽</p>
                     <button className="cart-item__btn"></button>
                  </div>
               </div>
               <div className="cart-item__wrapper">
                  <div className="cart-item__img">
                     <img src="img/card__img/img-1.png" alt="Устрицы по рокфеллеровски" />
                  </div>
                  <h4 className="cart-item__title">Устрицы по рокфеллеровски</h4>
                  <div className="cart-item__price">
                     <p>2 700 ₽</p>
                     <button className="cart-item__btn"></button>
                  </div>
               </div>
               <div className="cart-item__wrapper">
                  <div className="cart-item__img">
                     <img src="img/card__img/img-1.png" alt="Устрицы по рокфеллеровски" />
                  </div>
                  <h4 className="cart-item__title">Устрицы по рокфеллеровски</h4>
                  <div className="cart-item__price">
                     <p>2 700 ₽</p>
                     <button className="cart-item__btn"></button>
                  </div>
               </div>
            </div>
            <div className="cart__bottom">
               <p className="cart__price-total">
                  Заказ на сумму: <span>6 220 ₽</span>
               </p>
               <a href="#">Оформить заказ</a>
            </div>
         </div>
      </main>
   )
}

export default Card

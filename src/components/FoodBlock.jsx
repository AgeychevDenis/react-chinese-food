import React from 'react'
// import img1 from '../assets/img/card__img/img-1.png'

function FoodBlock({ name, description, price, count, type, imageUrl }) {
   return (
      <div className="product-item__wrapper">
         <div className="product-item__inner">
            <div className="product-item__img">
               <img src={imageUrl} alt="Устрицы по рокфеллеровски" />
            </div>
            <h3 className="product-item__title">{name}</h3>
            <p className="product-item__description">{description}</p>
         </div>
         <div className="product-item__block">
            <p className="product-item__price">
               {price} ₽
               <span>/ {count} {type}</span>
            </p>
            <button type="button" className="product-item__btn">+</button>
         </div>
      </div>
   )
}

export default FoodBlock

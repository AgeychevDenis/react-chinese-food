import React from 'react'
import Button from './Button'

function CartItem({ id, name, totalPrice, imageUrl, totalCount, onRemove }) {
   const handleRemoveClick = () => {
      onRemove(id);
   }

   return (
      <div className="cart-item__wrapper">
         <div className='cart-item__inner'>
            <div className="cart-item__img">
               <img src={imageUrl} alt="устрица" />
            </div>
            <h4 className="cart-item__title">{name}</h4>
         </div>
         <div className='cart-item__block'>
            <p>{totalCount} шт.</p>
            <div className="cart-item__price">
               <p>{totalPrice} ₽</p>
               <Button onClick={handleRemoveClick} className="cart-item__btn"></Button>
            </div>
         </div>
      </div>
   )
}

export default CartItem

import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'


function FoodBlock({ id, name, description, price, count, type, imageUrl, onClickAddFood }) {

   const onAddFood = () => {
      const obj = {
         id,
         name,
         imageUrl,
         price
      }
      onClickAddFood(obj);
   };

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
            <Button
               onClick={onAddFood}
               className="product-item__btn">
               +
            </Button>
         </div>
      </div >
   )
}

FoodBlock.defaultProps = {
   name: '---',
   description: '---',
   price: 0,
   count: 0,
   type: '--'
}

FoodBlock.propTypes = {
   name: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
   count: PropTypes.number.isRequired,
   type: PropTypes.string.isRequired,
   imageUrl: PropTypes.string.isRequired,
   onAddFood: PropTypes.func,
};

export default FoodBlock

import React from 'react'
import PropTypes from 'prop-types'


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

FoodBlock.defaultProps = {
   name: '---',
   description: '---',
   price: 0,
   count: 0,
   type: '--',
}

FoodBlock.propTypes = {
   name: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
   count: PropTypes.number.isRequired,
   type: PropTypes.string.isRequired,
   imageUrl: PropTypes.string.isRequired,
};

export default FoodBlock

export const addFoodToCart = (foodObj) => ({
   type: 'ADD_FOOD_CART',
   payload: foodObj,
})

export const removeCartItem = (id) => ({
   type: 'REMOVE_CART_ITEM',
   payload: id,
})
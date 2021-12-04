const initialState = {
   items: [],
   isLoaded: false,
};

const foods = (state = initialState, action) => {
   if (action.type === 'SET_FOODS') {
      return {
         ...state,
         items: action.payload,
      };
   }
   return state;
};

export default foods;
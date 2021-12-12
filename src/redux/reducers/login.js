const initialState = {
   items: [],
   isLoaded: false,
};

const login = (state = initialState, action) => {
   switch (action.type) {
      case 'SET_LOGIN':
         return {
            ...state,
            isLoaded: action.payload,
         };

      default:
         return state;
   }
};

export default login;
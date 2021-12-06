import { combineReducers } from 'redux';

import foods from './foods';
import cart from './cart';

const rootReducer = combineReducers({
   foods,
   cart,
});

export default rootReducer;
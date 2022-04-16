import axios from 'axios';

export const setLoaded = (payload) => ({
   type: 'SET_LOADED',
   payload,
})

export const fetchFoods = () => (dispatch) => {
   dispatch(setLoaded(false))
   axios
      .get('http://myjson.dit.upm.es/api/bins/c2ox')
      .then(({ data }) => {
         dispatch(setFoods(data));
      });
};

export const setFoods = (items) => ({
   type: 'SET_FOODS',
   payload: items,
});
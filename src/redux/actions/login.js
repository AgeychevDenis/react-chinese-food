import axios from 'axios';


export const setLogin = (items) => ({
   type: 'SET_LOGIN',
   payload: items,
})

export const fetchLogin = () => (dispatch) => {
   axios
      .get('/login')
      .then(({ data }) => {
         dispatch(setLogin(data));
      });
};
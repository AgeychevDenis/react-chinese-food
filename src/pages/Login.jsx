import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import myImage from '../assets/img/logo__img/background.jpg'
import { fetchLogin } from '../redux/actions/login';
// import { Link } from 'react-router-dom';

function Login() {
   const dispatch = useDispatch();

   React.useEffect(() => {
      dispatch(fetchLogin())
   }, [dispatch]);

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [checkbox, setCheckbox] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

   }

   return (
      <main className="login" style={{
         backgroundImage: `url(${myImage})`
      }} >
         <div className="login__container">
            <h1 className="login__title">вход</h1>
            <form id="form" className="form" onSubmit={(e) => handleSubmit(e)}>
               <div className="form__wrapper-input">
                  <input
                     type="text"
                     id="email"
                     className="form__input"
                     placeholder="E-mail"
                     value={email}
                     onChange={(e) => setEmail(e.target.value.trim())} />
                  <small></small>
               </div>
               <div className="form__wrapper-input">
                  <input
                     type="password"
                     id="password"
                     className="form__input"
                     placeholder="Пароль"
                     value={password}
                     onChange={(e) => setPassword(e.target.value.trim())} />
                  <small></small>
               </div>
               <div className="form__wrapper-input">
                  <input
                     type="checkbox"
                     id="checkbox"
                     className="form__checkbox"
                     value={checkbox}
                     onChange={(e) => setCheckbox(e.target.checked)} />
                  <div className="form__checkbox-mark"></div>
                  <label for="form__input-checkbox">Я согласен получать обновления на почту</label>
                  <small></small>
               </div>
               <div className="form__btn">
                  <button>Войти</button>
               </div>
            </form>
         </div>
      </main>
   )
}

export default Login


{/*
   import React, { useState } from 'react'
   import myImage from '../assets/img/logo__img/background.jpg'
   import { useDispatch } from 'react-redux';
   import { Formik } from 'formik'
   import { fetchLogin } from '../redux/actions/login';
   import * as yup from 'yup'
   
   function Login() {
      const dispatch = useDispatch();
   
      React.useEffect(() => {
         dispatch(fetchLogin())
      }, [dispatch]);
   
      const validationsSchema = yup.object().shape({
         email: yup.string().email('Введите верный email').required('Обязательно'),
         password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
      })
   
   
      return (
         <main className="login" style={{
            backgroundImage: `url(${myImage})`
         }} >
            <div className="login__container">
               <h1 className="login__title">вход</h1>
               <Formik
                  initialValus={{
                     name: '',
                     email: '',
                     password: '',
                     checkbox: false,
                  }}
                  validateOnBlur
                  onSubmit={(values) => { console.log(values) }}
                  validationsSchema={validationsSchema}
               >
                  {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                     <form id="form" className="form">
                        <div htmlFor={`email`} className="form__wrapper-input">
                           <input
                              type={`email`}
                              name={`email`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="form__input"
                              placeholder="E-mail"
                              value={values.email} />
                        </div>
                        {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}
                        <div className="form__wrapper-input">
                           <input
                              type={`password`}
                              name={`password`}
                              className={'form__input'}
                              placeholder={'Пароль'}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.password} />
                        </div>
                        {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}
                        <div className="form__wrapper-input">
                           <input
                              type="checkbox"
                              id="checkbox"
                              className="form__checkbox" />
                           <div className="form__checkbox-mark"></div>
                           <label for="form__input-checkbox">Я согласен получать обновления на почту</label>
                           <small></small>
                        </div>
                        <div className="form__btn">
                           <button
                              disabled={!isValid && !dirty}
                              onClick={handleSubmit}
                              type={`submit`}
                           >
                              Войти
                           </button>
                        </div>
                     </form>
                  )}
               </Formik>
            </div>
         </main>
      )
   }
   
   export default Login   
   */
}

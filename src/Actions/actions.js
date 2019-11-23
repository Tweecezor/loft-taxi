import { createAction } from 'redux-actions';


export const LOGIN_USER = 'login-user';
export const ISLOGGED = 'is-logged';
export const LOGOUT_USER = 'logout-user';
export const REG = 'reg-user';

// export const LogginAction = (obj) => ({
//     type: LOGIN_USER,
//     payload: {
//       email:obj.email,
//       password:obj.password
//     },
// })
// export const isLogged = (userToken) => ({
//     type:ISLOGGED,
//     payload : {
//         isLoggedIn : true,
//         userToken
//     }

// })

// export const LogoutAction = () => ({
//     type: LOGOUT_USER,
//     payload: {
//       isLoggedIn:false
//     },
// })

export const LogginAction = createAction('LOGIN_USER');
export const isLogged = createAction('IS_LOGGED');
export const LogoutAction = createAction('LOGOUT_USER');

export const changeCardNumber = createAction('CHANGE_CARD_NUMBER');
export const changeCardData = createAction('CHANGE_CARD_DATA');
export const changeCardOwner = createAction('CHANGE_CARD_OWNER');
export const changeCardCVC = createAction('CHANGE_CARD_CVC');

export const sendProfileDataRequest = createAction('SEND_PROFILE_REQ');
export const setProfileDataRequest = createAction('SET_PROFILE_REQ');

export const getProfileDataRequest = createAction('GET_PROFILE_DATA_REQ');

export const fetchCardDataRequest = createAction('GET_CARD_DATA');

export const sendRegistrationRequest = createAction('SEND_REG_REQUEST');

export const fetchAddressesList = createAction('GET_ADDRESSES');
export const setAddressesList = createAction('SET_ADDRESSES');

export const fetchOrderAddresses = createAction('SEND_ORDER_COORDS');
export const setOrderCoords = createAction('SET_ORDER_COORDS');
export const setNewOrder = createAction('SET_NEW_ORDER');

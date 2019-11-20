import {combineReducers} from 'redux';
import {createSelector} from 'reselect';

import allActions from './Actions/indexActions';
// import {LOGIN_USER,LOGOUT_USER} from './Actions/actions'
// import {ISLOGGED} from './Actions/actions'

const {sendRegistrationRequest,sendProfileDataRequest,getProfileDataRequest,
    getCardDataRequest,changeCardNumber,changeCardData,changeCardOwner,
    changeCardCVC,LOGIN_USER,LOGOUT_USER,ISLOGGED} = allActions;

const initLoggedState = {
  
}
const initUser = {
    email:'',
    password:'',
    isLoggedIn:false,
    userToken:''
}
const initRegistrationUserState = {
    email:'',
    password:'',
    name:'',
    surname:''
}
const initProfileDataState = {
    cardNumber:'',
    cardData:'',
    cardOwner:'',
    cardCVC:'',
}

export const LoginReducer = ( state = initUser, action ) => {
    switch(action.type) {
        case LOGIN_USER :
            return {
                ...state,
                email:action.payload.email,
                password:action.payload.password
            }
        case ISLOGGED : 
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                userToken: action.payload.userToken
            }
        case LOGOUT_USER :
            return {
                ...state,
                isLoggedIn : action.payload.isLoggedIn,
                userToken:''
            }
        default:
            return state
    }   
}

const RegistrationReducer = (state = initRegistrationUserState, action) => {
    switch(action.type) {
        case sendRegistrationRequest.toString() :
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name,
                surname: action.payload.surename,
            }
        default:
            return state
    }
}
export const ProfileReducer = (state = initProfileDataState ,action) => {
    switch(action.type) {
        case changeCardNumber.toString():
            return {
                ...state,
                cardNumber:action.payload.cardNumber,
            }
        case changeCardData.toString():
            return {
                ...state,
                cardData:action.payload.cardData
            }
        case changeCardOwner.toString():
            return {
                ...state,
                cardOwner:action.payload.cardOwner
            }
        case changeCardCVC.toString():
            return {
                ...state,
                cardCVC:action.payload.cardCVC
            }
        case sendProfileDataRequest.toString():
            return {
                ...state,
                cardNumber:action.payload.cardNumber,
                cardData:action.payload.expiryDate,
                cardOwner:action.payload.cardName,
                cardCVC:action.payload.cvc
            }
        case getProfileDataRequest.toString():
            return {
                ...state,
                cardNumber:action.payload.cardNumber,
                cardData:action.payload.expiryDate,
                cardOwner:action.payload.cardName,
                cardCVC:action.payload.cvc
            }
        case getCardDataRequest.toString() :
            return {
                ...state
            }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    LoginReducer,
    RegistrationReducer,
    ProfileReducer
})

export default rootReducer;

export const getIsLoggedIn = createSelector(state=>state.LoginReducer.isLoggedIn,
    isLoggedIn => isLoggedIn
    )
 
export const getCardsData = state => state.ProfileReducer
export const getUserToken = state => state.LoginReducer.userToken;

import {combineReducers} from 'redux';
import {createSelector} from 'reselect';

import allActions from './Actions/indexActions';
// import {LOGIN_USER,LOGOUT_USER} from './Actions/actions'
// import {ISLOGGED} from './Actions/actions'

const {sendRegistrationRequest,sendProfileDataRequest,getProfileDataRequest,
    fetchCardDataRequest,changeCardNumber,changeCardData,changeCardOwner,
    changeCardCVC,LOGOUT_USER,LogginAction,isLogged,setProfileDataRequest,
    fetchAddressesList,setAddressesList,setOrderCoords,fetchOrderAddresses,
    LogoutAction,setNewOrder
} = allActions;

// const initLoggedState = {
  
// }
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
const initAddressesState = {
    addresses:[]
}
const initOrderCoords = {
    coords:'',
    newOrder:false
};

export const OrderCoordsReducer = (state = initOrderCoords,action) => {
    switch (action.type) {
        case fetchOrderAddresses.toString() :
            return {
                ...state
            }
        case setOrderCoords.toString() :
            console.log(action.payload);
            return {
                ...state,
                coords:action.payload
            }
        case setNewOrder.toString():
            return {
                ...state,
                newOrder:action.payload.newOrder,
                coords:''
            }
        default:
            return {
                ...state
            }
    }
}

export const LoginReducer = ( state = initUser, action ) => {
    switch(action.type) {
        case LogginAction.toString() :
            return {
                ...state
            }
        case isLogged.toString() : 
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                userToken: action.payload.userToken
            }
        case LogoutAction.toString() :
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
        case setProfileDataRequest.toString():
            return {
                ...state,
                cardNumber:action.payload.cardNumber,
                cardData:action.payload.expiryDate,
                cardOwner:action.payload.cardName,
                cardCVC:action.payload.cvc
            }
        case sendProfileDataRequest.toString():
            return {
                ...state,
            }
        case getProfileDataRequest.toString():
            return {
                ...state,
                cardNumber:action.payload.cardNumber,
                cardData:action.payload.expiryDate,
                cardOwner:action.payload.cardName,
                cardCVC:action.payload.cvc
            }
        case fetchCardDataRequest.toString() :
            return {
                ...state
            }
        default:
            return state
    }
}
export const AddressesReducer = (state = initAddressesState,action) => {
    switch(action.type){
        case fetchAddressesList.toString():
            return {
                ...state
            }
        case setAddressesList.toString():
            return {
            ...state,
            addresses:action.payload.addresses
        }
        default:
            return {
                ...state
            }
    }
}


const rootReducer = combineReducers({
    LoginReducer,
    RegistrationReducer,
    ProfileReducer,
    AddressesReducer,
    OrderCoordsReducer
})

export default rootReducer;

export const getIsLoggedIn = createSelector(state=>state.LoginReducer.isLoggedIn,
    isLoggedIn => isLoggedIn
    )
 
export const getCardsData = state => state.ProfileReducer
export const getUserToken = state => state.LoginReducer.userToken;
export const getAddressesList = state => state.AddressesReducer.addresses

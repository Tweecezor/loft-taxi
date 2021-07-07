// import * as allActions  from './actions'; 
import {setRegResponse,setNewOrder,LogoutAction,setOrderCoords,fetchOrderAddresses,setAddressesList,fetchAddressesList,isLogged,LogginAction,sendRegistrationRequest,sendProfileDataRequest,getProfileDataRequest,fetchCardDataRequest,changeCardNumber,changeCardData,changeCardOwner,changeCardCVC,setProfileDataRequest} from './actions'
import {LOGIN_USER,LOGOUT_USER} from './actions'
import {ISLOGGED} from './actions'

const allActions = {
    sendRegistrationRequest,
    sendProfileDataRequest,
    getProfileDataRequest,
    fetchCardDataRequest,
    changeCardNumber,
    changeCardData,
    changeCardOwner,
    changeCardCVC,
    LOGIN_USER,
    LOGOUT_USER,
    ISLOGGED,
    setProfileDataRequest,
    LogginAction,
    isLogged,
    fetchAddressesList,
    setAddressesList,
    setOrderCoords,
    fetchOrderAddresses,
    LogoutAction,
    setNewOrder,
    setRegResponse
};

export default  allActions 
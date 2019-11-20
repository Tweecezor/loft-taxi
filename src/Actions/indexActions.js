// import * as allActions  from './actions'; 
import {sendRegistrationRequest,sendProfileDataRequest,getProfileDataRequest,getCardDataRequest,changeCardNumber,changeCardData,changeCardOwner,changeCardCVC} from './actions'
import {LOGIN_USER,LOGOUT_USER} from './actions'
import {ISLOGGED} from './actions'

const allActions = {
    sendRegistrationRequest,
    sendProfileDataRequest,
    getProfileDataRequest,
    getCardDataRequest,
    changeCardNumber,
    changeCardData,
    changeCardOwner,
    changeCardCVC,
    LOGIN_USER,
    LOGOUT_USER,
    ISLOGGED
};

export default  allActions 
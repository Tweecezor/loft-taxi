import {takeEvery,call,put,fork,select} from 'redux-saga/effects';
import allActions from './Actions/indexActions'
// import {getCardDataRequest} from './Actions/actions';

const {

    fetchCardDataRequest,
    getProfileDataRequest,
    sendProfileDataRequest,
    setProfileDataRequest,
    sendRegistrationRequest,
    LogginAction,
    isLogged,
    setAddressesList,
    fetchAddressesList,
    setOrderCoords,
    fetchOrderAddresses

} = allActions;


const getCardsData = userToken =>
    fetch(`https://loft-taxi.glitch.me/card?token=${userToken}`).then(response=>
    response.json());



export function * getCardsDataFromServer(){
    yield takeEvery(fetchCardDataRequest, function* (action){
        try{
            
            const result = yield call(getCardsData,action.payload.userToken);
               
            yield put(getProfileDataRequest(result))
        }
        catch(error){
        } 
    })
}

const setCardsData = (action) => 
   { return fetch('https://loft-taxi.glitch.me/card',{
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(action.payload)
    })
    .then(response => response.json())}

function* setCardsDataToComponent(){
   
    yield takeEvery(sendProfileDataRequest, function* (action){
        try{
            
            const result = yield call(setCardsData,action);
            
            yield put(setProfileDataRequest(action.payload))
           
        }
        catch(error){

        }
    })
}

const regUser = (action) => {
    return fetch('https://loft-taxi.glitch.me/register',{
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(action.payload)
    }).then(response => response.json())
}

function* userRegistration(){
    yield takeEvery(sendRegistrationRequest, function* (action){
        try{
            
            const result = yield call(regUser,action);
            
           
        }
        catch(error){

        }
    })
}

const login = (action) => {
   return fetch('https://loft-taxi.glitch.me/auth',{
    method : 'POST',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify(action.payload)
})
.then(response => response.json())
}


function* userLogin(){
    yield takeEvery(LogginAction, function* (action){
        try{
            
            const result = yield call(login,action);
            
            let userToken = result.token;
            yield put(isLogged({isLoggedIn:true,userToken}))  
        }
        catch(error){

        }
    })
}


const getAddresses = () =>
    fetch(`https://loft-taxi.glitch.me/addressList`).then(response=>
    response.json());

function* getAddressesList(){
    yield takeEvery(fetchAddressesList,function*(action){
        try{
            
            const result = yield call(getAddresses,action);
            
            yield put(setAddressesList(result));
            // const state =  yield select(state=>state);
                    }
        catch(error){

        }
    })
    
}

const getCoords = (direction) => 
   {console.log(direction); return fetch(`https://loft-taxi.glitch.me/route?address1=${direction.from}&address2=${direction.to}`).then(response=>
    response.json());}


function* getOrderCoords(){
    yield takeEvery(fetchOrderAddresses,function*(action){
        try{
            const result = yield call(getCoords,action.payload);
            
            yield put(setOrderCoords(result));
            const state =  yield select(state=>state);
                    }
        catch(error){

        }
    })
}

export function* handleSaga(){
    yield fork(getCardsDataFromServer);
    yield fork(setCardsDataToComponent);
    yield fork(userRegistration);
    yield fork(userLogin);
    yield fork(getAddressesList);
    yield fork(getOrderCoords);
    
    
    
}
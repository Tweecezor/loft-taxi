import {sendRegistrationRequest,sendProfileDataRequest,getProfileDataRequest,fetchCardDataRequest} from './Actions/actions';
import {LOGIN_USER} from './Actions/actions'; 
import {isLogged} from './Actions/actions'; 

export const registrationMiddleware = store => next => action => {
    // console.log(JSON.stringify(action.payload));
    // console.log(action.type);
    // console.log(LOGIN_USER);
    // console.log('{ "email": "test5@test.com", "password": "000000", "name": "NAME", "surname": "SURNAME" }');
    var userToken;
    if(action.type === sendRegistrationRequest.toString()) {
        fetch('https://loft-taxi.glitch.me/register',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(action.payload)
        })
        .then(response => response.json())
        .then(result =>{console.log(result)})
        .catch(error=>{
            console.log('JIB<RF ОШБИКА')
        })
    }
    if (action.type === LOGIN_USER) {
    //    console.log(action);
        fetch('https://loft-taxi.glitch.me/auth',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(action.payload)
        })
        .then(response => response.json())
        .then(result =>{
            // console.log(result.token);
            userToken = result.token;
            store.dispatch(isLogged(result.token))
            // console.log('after middleware REQ');
            // console.log(store.getState());
        })
        .catch(error=>{
            console.log('JIB<RF ОШБИКА')
        })
    }
    return next(action);
}
// export const profileMiddleware = store => next => action => {
//     if (action.type === sendProfileDataRequest.toString()){
//         // console.log(JSON.stringify(action.payload));
//         // console.log('{ "cardNumber": "2000 0000 0000 0000", "expiryDate": "01/22", "cardName": "TEST", "cvc": "910", "token": "AUTH_TOKEN" }')
//         fetch('https://loft-taxi.glitch.me/card',{
//             method : 'POST',
//             headers : {'Content-Type' : 'application/json'},
//             body : JSON.stringify(action.payload)
//         })
//         .then(response => response.json())
//         .then(result =>{
//             console.log(result);
//             sendProfileDataRequest(action)
//         })
//         .catch(error=>{
//             console.log('JIB<RF ОШБИКА')
//         })
//     }
//     if (action.type === fetchCardDataRequest.toString()){
//         console.log(action.payload.userToken);
//         fetch(`https://loft-taxi.glitch.me/card?token=${action.payload.userToken}`)
//         .then(response=>response.json())
//         .then(result => {
//             store.dispatch(getProfileDataRequest(result));
//             console.log(result);
//             console.log(store.getState());
//         })
//         .catch(error=>{
//             console.log(error);
//         })
//     }
//     return next(action);
// }
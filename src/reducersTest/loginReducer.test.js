import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import {isLogged,LogoutAction,LOGIN_USER,LOGOUT_USER} from '../Actions/actions'
import {LoginReducer} from '../reducers';


var state = {
    isLoggedIn:false,
    userToken:''
}
it('when user login then isLoggedIn = true',()=>{
    // test data
  
    //action
    var action = isLogged({isLoggedIn:true})
    let newState = LoginReducer(state,action);
    console.log(newState.isLoggedIn);
    //expectation
    expect(newState.isLoggedIn).toBe(true)
})
it('when user login then userToken = token',()=>{
    // test data
  
    //action
    var action = isLogged({userToken:'token'});
    let newState = LoginReducer(state,action);

    //expectation
    expect(newState.userToken).toBe('token')
})
it('when user logout then isLoggedIn = false',()=>{
    // test data
   
    let state = {
    isLoggedIn:true,
    userToken:'token'
}
    //action
    let action = LogoutAction({isLoggedIn:false,userToken:''});
    let newState = LoginReducer(state,action);

    //expectation
    expect(newState.isLoggedIn).toBe(false)
})
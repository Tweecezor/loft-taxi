import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import {isLogged,LogoutAction,LOGIN_USER,LOGOUT_USER} from '../Actions/actions'
import {LoginReducer} from '../reducers';

var action = isLogged('token');
var state = {
    isLoggedIn:false,
    userToken:''
}
it('when user login then isLoggedIn = true',()=>{
    // test data
  
    //action
    let newState = LoginReducer(state,action);

    //expectation
    expect(newState.isLoggedIn).toBe(true)
})
it('when user login then userToken = token',()=>{
    // test data
  
    //action
    let newState = LoginReducer(state,action);

    //expectation
    expect(newState.userToken).toBe('token')
})
it('when user login then userToken = token',()=>{
    // test data
    let action = LogoutAction();
    let state = {
    isLoggedIn:true,
    userToken:'token'
}
    //action
    let newState = LoginReducer(state,action);

    //expectation
    expect(newState.isLoggedIn).toBe(false)
})
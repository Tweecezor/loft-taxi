import React from 'react';
import {sendRegistrationRequest} from '../Actions/actions'
import {RegistrationReducer} from '../reducers';

var state = {
   
}

it('user registration',()=>{
    // test data
    var state  = {
        email:'',
        password:'',
        name:'',
        surname:''
    }
    //action
    var action = sendRegistrationRequest ({email:'email',password:'password',name:'name',surname:'surname'})
    var newState = RegistrationReducer(state,action);
    //expectation   
    expect(newState.email).toBe('email');
    expect(newState.password).toBe('password');
    expect(newState.name).toBe('name');
    expect(newState.surname).toBe('surname');
    
})

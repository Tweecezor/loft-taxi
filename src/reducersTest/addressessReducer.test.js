import React from 'react';
import {setAddressesList} from '../Actions/actions'
import {AddressesReducer} from '../reducers';

var state = {
    addresses:[]
}

it('setAddressesList',()=>{
    // test data

    //action
    var action = setAddressesList({addresses:['ПУлково','Шаверма']});

    var newState = AddressesReducer(state,action);

    //expectation
    expect(newState.addresses.length).toBe(2);
    
})

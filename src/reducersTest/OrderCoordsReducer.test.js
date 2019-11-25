import React from 'react';
import {setOrderCoords,setNewOrder} from '../Actions/actions'
import {OrderCoordsReducer} from '../reducers';

var state = {
    coords:'',
    newOrder:false
}

it('set New Order Status',()=>{
    // test data

    //action
    var action = setNewOrder({newOrder:true})

    var newState = OrderCoordsReducer(state,action)
    console.log(newState);
    //expectation
    expect(newState.newOrder).toBe(true);
    
})

it('set New Coords',()=>{
    // test data

    //action
    var action = setOrderCoords([1,2,3,4])

    var newState = OrderCoordsReducer(state,action)
    console.log(newState);
    //expectation
    expect(newState.coords.length).toBe(4);
    
})

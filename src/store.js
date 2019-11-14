import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers'
import {registrationMiddleware,profileMiddleware} from './middlewares'


const createAppStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(registrationMiddleware),
            applyMiddleware(profileMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : noop => noop,
        )
    );
    // console.log(store.getState());
    return store
}

// console.log(store.dispatch)
// console.log(store.dispatch({type:'login-user',payload:{isLoggedIn:true}}))

export default createAppStore;
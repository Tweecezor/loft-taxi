import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers'
import createSagaMiddleWare from 'redux-saga';
import {registrationMiddleware,profileMiddleware} from './middlewares'
import {handleSaga} from '../src/sagas';


const sagaMiddleware = createSagaMiddleWare();
const middlewares = [registrationMiddleware];
const createAppStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            // applyMiddleware(...middlewares),
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : noop => noop,
        )
    );
    // console.log(store.getState());
    sagaMiddleware.run(handleSaga);
    return store
}


// console.log(store.dispatch)
// console.log(store.dispatch({type:'login-user',payload:{isLoggedIn:true}}))

export default createAppStore;
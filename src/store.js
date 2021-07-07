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
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : noop => noop,
        )
    );

    sagaMiddleware.run(handleSaga);
    return store
}

export default createAppStore;
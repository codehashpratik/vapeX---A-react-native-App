import {Tuple, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
// Reducers
import AuthReducer from './reducer/AuthReducer';
import UserReducer from './reducer/UserReducer';
import ProductReducer from './reducer/ProductReducer';

// RootSaga
import RootSaga from './reducer_saga/RootSaga';
import FilterReducer from './reducer/FilterReducer';

let sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    AuthReducer: AuthReducer,
    UserReducer: UserReducer,
    ProductReducer: ProductReducer,
    FilterReducer: FilterReducer,
  },
  middleware: () => new Tuple(sagaMiddleware, logger),
});

sagaMiddleware.run(RootSaga);

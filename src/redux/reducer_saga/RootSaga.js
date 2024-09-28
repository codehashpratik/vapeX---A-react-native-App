import {all} from 'redux-saga/effects';
import AuthSaga from '../reducer_saga/AuthSaga';
import UserSaga from '../reducer_saga/UserSaga';
import ProductSaga from '../reducer_saga/ProductSaga';

const combinedSaga = [...AuthSaga, ...UserSaga, ...ProductSaga];

export default function* RootSaga() {
  yield all(combinedSaga);
}

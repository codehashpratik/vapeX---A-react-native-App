import {call, put, select, takeLatest, takeEvery} from 'redux-saga/effects';
import {getApi, postApi} from '../../utils/ApiRequest';
import showMessage from '../../utils/showMessage';
import {
  getUserInfoFailure,
  getUserInfoSuccess,
  updateUserInfoFailure,
  updateUserInfoSuccess,
} from '../reducer/UserReducer';
import {logoutRequest} from '../reducer/AuthReducer';

let getItem = state => state.AuthReducer;

export function* getUserInfoSaga(action) {
  let item = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: item?.isToken,
  };

  try {
    let response = yield call(getApi, 'api/user/profile-details', header);

    if (response.data?.status == 200) {
      yield put(getUserInfoSuccess(response.data.data));
      // showMessage(response.data?.message);
    } else {
      showMessage(response.data?.message);
      yield put(getUserInfoFailure(response.data.data));
      showMessage('Session timeout !');
      yield put(logoutRequest());
    }
  } catch (error) {
    // console.log(error);
    yield put(getUserInfoFailure(error));
  }
}

const watchFunction = [
  (function* () {
    yield takeLatest('User/getUserInfoRequest', getUserInfoSaga);
  })(),
];

export default watchFunction;

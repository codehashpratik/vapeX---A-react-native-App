import {call, put, select, takeLatest, takeEvery} from 'redux-saga/effects';
import {postApi} from '../../utils/ApiRequest';
import {
  getDataFailure,
  getDataSuccess,
  getTokenFaliure,
  getTokenSuccess,
  loginFailure,
  loginSuccess,
  logoutSuccess,
  setData,
  setToken,
  signUpFailure,
  signUpSuccess,
} from '../reducer/AuthReducer';
import showMessage from '../../utils/showMessage';
import constants from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* setTokenSaga(action) {
  try {
    yield call(AsyncStorage.setItem, constants.TOKEN, action.payload);
  } catch (error) {
    // error
  }
}

export function* getTokenSaga() {
  try {
    let token = yield call(AsyncStorage.getItem, constants.TOKEN);

    if (token) {
      yield put(getTokenSuccess(token));
    } else {
      yield put(getTokenFaliure());
    }
  } catch (error) {
    yield put(getTokenFaliure());
  }
}

export function* signUpSaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'multipart/form-data', // 'application/json',
  };

  try {
    // postApi('api/user/signup',action.payload,header)
    let response = yield call(
      postApi,
      'api/user/signup',
      action.payload,
      header,
    );

    if (response.data.status == 200) {
      yield put(signUpSuccess(response.data.data));
      showMessage(response.data?.message);
    } else {
      showMessage(response.data?.message);
      yield put(signUpFailure(response.data.data));
    }
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* loginSaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };

  try {
    let response = yield call(
      postApi,
      'api/user/signin',
      action.payload,
      header,
    );

    if (response.data.status == 200) {
      if (action.payload.rememberme) {
        yield put(setData(action.payload));
      }

      yield put(loginSuccess(response.data.data));
      yield put(setToken(response.data.token));

      showMessage(response.data?.message);
    } else {
      showMessage(response.data?.message);
      yield put(loginFailure(response.data.data));
    }
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* logoutSaga(action) {
  try {
    yield call(AsyncStorage.removeItem, constants.TOKEN);
    yield put(logoutSuccess());
  } catch (error) {
    // error
  }
}

export function* setDataSaga(action) {
  try {
    const jsonValue = JSON.stringify(action.payload);
    yield call(AsyncStorage.setItem, constants.CREDENTIALS, jsonValue);
  } catch (error) {
    // error
  }
}

export function* getDataSaga() {
  try {
    let credentials = yield call(AsyncStorage.getItem, constants.CREDENTIALS);

    if (credentials) {
      yield put(getDataSuccess(credentials));
    } else {
      yield put(getDataFailure());
    }
  } catch (error) {
    yield put(getDataFailure());
  }
}

const watchFunction = [
  (function* () {
    yield takeLatest('Auth/signUpRequest', signUpSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/setToken', setTokenSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/getTokenRequest', getTokenSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/loginRequest', loginSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/logoutRequest', logoutSaga);
  })(),

  (function* () {
    yield takeLatest('Auth/setData', setDataSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/getDataReguest', getDataSaga);
  })(),
];

export default watchFunction;

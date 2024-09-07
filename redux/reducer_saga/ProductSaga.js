import {call, put, select, takeLatest} from 'redux-saga/effects';
import {getApi, getApiWithParam, postApi} from '../../utils/ApiRequest';
import showMessage from '../../utils/showMessage';
import constants from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CreateProductSuccess,
  CreateProductFailure,
  getAllProductListSuccess,
  getAllProductListFailure,
  updateProductSuccess,
  updateProductFailure,
  deleteProductSuccess,
  deleteProductFailure,
  getCartListSuccess,
  getCartListFailure,
  getOrderListSuccess,
  getOrderListFailure,
  removeCartlistSuccess,
  removeOrderlistSuccess,
} from '../reducer/ProductReducer';

let getItem = state => state.AuthReducer;

export function* CreateProductSaga(action) {
  let item = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype: 'multipart/form-data',
    authorization: item?.isToken,
  };

  try {
    let response = yield call(
      postApi,
      'api/product/create',
      action.payload,
      header,
    );

    if (response.data?.status == 200) {
      yield put(CreateProductSuccess(response.data.data));
      showMessage(response.data?.message);
    } else {
      showMessage(response.data?.message);
      yield put(CreateProductFailure(response.data.data));
    }
  } catch (error) {
    yield put(CreateProductFailure(error));
  }
}
export function* getAllProductListSaga(action) {
  let item = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: item?.isToken,
  };

  try {
    let response = yield call(
      postApi,
      'api/product/list',
      action.payload,
      header,
    );

    if (response.data?.status == 200) {
      yield put(getAllProductListSuccess(response.data.data));
    } else {
      showMessage(response.data?.message);
      yield put(getAllProductListFailure(response.data.data));
    }
  } catch (error) {
    yield put(getAllProductListFailure(error));
  }
}

export function* updateProductSaga(action) {
  let item = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype: 'multipart/form-data',
    authorization: item?.isToken,
  };

  try {
    let response = yield call(
      postApi,
      'api/product/update',
      action.payload,
      header,
    );

    if (response.data?.status == 200) {
      yield put(updateProductSuccess(response.data.data));
      showMessage('Your feedback has been submitted.Thanks for sharing !');
    } else {
      showMessage(response.data?.message);
      yield put(updateProductFailure(response.data.data));
    }
  } catch (error) {
    yield put(updateProductFailure(error));
  }
}

export function* deleteProductSaga(action) {
  let item = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: item?.isToken,
  };

  try {
    let response = yield call(
      postApi,
      'api/product/remove',
      action.payload,
      header,
    );

    if (response.data?.status == 200) {
      yield put(deleteProductSuccess(response.data.data));
      showMessage(response.data?.message);
    } else {
      showMessage(response.data?.message);
      yield put(deleteProductFailure(response.data.data));
    }
  } catch (error) {
    yield put(deleteProductFailure(error));
  }
}

export function* addToCartSaga(action) {
  try {
    const cartlist = yield call(AsyncStorage.getItem, constants.CART_LIST);
    let updatedCartList = JSON.parse(cartlist) || [];

    updatedCartList.push(action.payload);

    yield call(
      AsyncStorage.setItem,
      constants.CART_LIST,
      JSON.stringify(updatedCartList),
    );
  } catch (error) {
    // error
  }
}

export function* getCartListsaga() {
  try {
    const cartList = yield call(AsyncStorage.getItem, constants.CART_LIST);
    const parsedCartList = cartList ? JSON.parse(cartList) : [];

    if (parsedCartList) {
      yield put(getCartListSuccess(parsedCartList));
    } else {
      yield put(getCartListFailure());
    }
  } catch (error) {
    yield put(getCartListFailure());
  }
}

export function* addToOrderSaga(action) {
  try {
    const orderlist = yield call(AsyncStorage.getItem, constants.ORDER_LIST);
    let existedOrderList = orderlist ? JSON.parse(orderlist) : [];
    let newOrderList = JSON.parse(action.payload);
    let updatedOrderList = existedOrderList.concat(newOrderList);

    yield call(
      AsyncStorage.setItem,
      constants.ORDER_LIST,
      JSON.stringify(updatedOrderList),
    );
  } catch (error) {
    // error
  }
}

export function* getOrderListSaga() {
  try {
    const orderlist = yield call(AsyncStorage.getItem, constants.ORDER_LIST);
    const parsedOrderList = orderlist ? JSON.parse(orderlist) : [];

    if (parsedOrderList) {
      yield put(getOrderListSuccess(parsedOrderList));
    } else {
      yield put(getOrderListFailure());
    }
  } catch (error) {
    yield put(getOrderListFailure());
  }
}

export function* removeCartListSaga(action) {
  try {
    yield call(AsyncStorage.removeItem, constants.CART_LIST);
    yield put(removeCartlistSuccess());
  } catch (error) {
    // error
  }
}
export function* removeOrderListSaga(action) {
  try {
    yield call(AsyncStorage.removeItem, constants.ORDER_LIST);
    yield put(removeOrderlistSuccess());
  } catch (error) {
    // error
  }
}

const watchFunction = [
  (function* () {
    yield takeLatest('product/CreateProductRequest', CreateProductSaga);
  })(),

  (function* () {
    yield takeLatest('product/getAllProductListRequest', getAllProductListSaga);
  })(),

  (function* () {
    yield takeLatest('product/updateProductRequest', updateProductSaga);
  })(),

  (function* () {
    yield takeLatest('product/deleteProductRequest', deleteProductSaga);
  })(),

  (function* () {
    yield takeLatest('product/addToCart', addToCartSaga);
  })(),
  (function* () {
    yield takeLatest('product/getCartListRequest', getCartListsaga);
  })(),

  (function* () {
    yield takeLatest('product/addToOrders', addToOrderSaga);
  })(),
  (function* () {
    yield takeLatest('product/getOrderListRequest', getOrderListSaga);
  })(),
  (function* () {
    yield takeLatest('product/removeCartlistRequest', removeCartListSaga);
  })(),
  (function* () {
    yield takeLatest('product/removeOrderlistRequest', removeOrderListSaga);
  })(),
];

export default watchFunction;

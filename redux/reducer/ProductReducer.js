import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  type: '',
  createProductRes: {},
  productDetailRes: {},
  productList: [],
  selectedProductDetails: {},
  cartList: [],
  orderList: [],
};

const UserSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    CreateProductRequest(state, action) {
      state.type = action.type;
    },
    CreateProductSuccess(state, action) {
      state.createProductRes = action.payload;
      state.type = action.type;
    },
    CreateProductFailure(state, action) {
      state.error = action.payload;
      state.type = action.type;
    },

    getProductRequest(state, action) {
      state.type = action.type;
    },
    getProductSuccess(state, action) {
      state.productDetailRes = action.payload;
      state.type = action.type;
    },
    getProductFailure(state, action) {
      state.error = action.payload;
      state.type = action.type;
    },

    getAllProductListRequest(state, action) {
      state.type = action.type;
      state.productList = [];
    },
    getAllProductListSuccess(state, action) {
      state.productList = action.payload;
      state.type = action.type;
    },
    getAllProductListFailure(state, action) {
      state.error = action.payload;
      state.type = action.type;
    },

    updateProductRequest(state, action) {
      state.type = action.type;
    },
    updateProductSuccess(state, action) {
      state.productDetailRes = action.payload;
      state.type = action.type;
    },
    updateProductFailure(state, action) {
      state.error = action.payload;
      state.type = action.type;
    },

    deleteProductRequest(state, action) {
      state.type = action.type;
    },
    deleteProductSuccess(state, action) {
      state.productList = action.payload;
      state.type = action.type;
    },
    deleteProductFailure(state, action) {
      state.error = action.payload;
      state.type = action.type;
    },

    selectedProductRequest(state, action) {
      state.selectedProductDetails = action.payload;
      state.type = action.type;
    },

    addToCart(state, action) {
      state.type = action.type;
    },

    getCartListRequest(state, action) {
      state.type = action.type;
    },
    getCartListSuccess(state, action) {
      state.type = action.type;
      state.cartList = action.payload;
    },
    getCartListFailure(state, action) {
      state.type = action.type;
    },
    addToOrders(state, action) {
      state.type = action.type;
    },

    getOrderListRequest(state, action) {
      state.type = action.type;
    },
    getOrderListSuccess(state, action) {
      state.type = action.type;
      state.orderList = action.payload;
    },
    getOrderListFailure(state, action) {
      state.type = action.type;
    },

    removeCartlistRequest(state, action) {
      state.type = action.type;
    },
    removeCartlistSuccess(state, action) {
      state.type = action.type;
    },
    removeCartlistFailure(state, action) {
      state.type = action.type;
    },

    removeOrderlistRequest(state, action) {
      state.type = action.type;
    },
    removeOrderlistSuccess(state, action) {
      state.type = action.type;
    },
    removeOrderlistFailure(state, action) {
      state.type = action.type;
    },
  },
});

export const {
  CreateProductRequest,
  CreateProductSuccess,
  CreateProductFailure,
  getProductRequest,
  getProductSuccess,
  getProductFailure,
  getAllProductListRequest,
  getAllProductListSuccess,
  getAllProductListFailure,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailure,
  selectedProductRequest,
  addToCart,
  getCartListRequest,
  getCartListSuccess,
  getCartListFailure,
  addToOrders,
  getOrderListRequest,
  getOrderListSuccess,
  getOrderListFailure,
  removeCartlistRequest,
  removeCartlistSuccess,
  removeCartlistFailure,
  removeOrderlistRequest,
  removeOrderlistSuccess,
  removeOrderlistFailure,
} = UserSlice.actions;

export default UserSlice.reducer;

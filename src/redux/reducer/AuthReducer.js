import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  type: '',
  isLoading: true,
  registrationUsers: {},
  loginResponse: {},
  error: {},
  isToken: null,
  credentials: null,
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    /* Set Token */
    setToken(state, action) {
      state.isToken = action.payload;
      state.type = action.type;
    },

    /* get Token */
    getTokenRequest(state, action) {
      state.type = action.type;
    },
    getTokenSuccess(state, action) {
      state.isToken = action.payload;
      state.isLoading = false;
      state.type = action.type;
    },
    getTokenFaliure(state, action) {
      state.isToken = null;
      state.isLoading = false;
      state.type = action.type;
    },

    /* Signup */
    signUpRequest(state, action) {
      state.type = action.type;
    },
    signUpSuccess(state, action) {
      state.registrationUsers = action.payload;
      state.type = action.type;
    },
    signUpFailure(state, action) {
      state.error = action.payload;
      state.type = action.type;
    },
    /* Login */
    loginRequest(state, action) {
      state.type = action.type;
    },
    loginSuccess(state, action) {
      state.loginResponse = action.payload;
      state.type = action.type;
    },
    loginFailure(state, action) {
      state.error = action.payload;
      state.type = action.type;
    },

    /* Logout */
    logoutRequest(state, action) {
      state.type = action.type;
    },
    logoutSuccess(state, action) {
      state.isToken = null;
      state.type = action.type;
      state.credentials = null;
    },
    logoutFailure(state, action) {
      state.error = action.payload;
      state.type = action.type;
    },

    // Remember me actions
    setData(state, action) {
      state.isToken = action.payload;
      state.type = action.type;
    },

    /* get Token */
    getDataReguest(state, action) {
      state.type = action.type;
    },
    getDataSuccess(state, action) {
      state.type = action.type;
      state.credentials = action.payload;
    },
    getDataFailure(state, action) {
      state.type = action.type;
    },
  },
});

export const {
  /* Set Token */
  setToken,
  /* get Token */
  getTokenRequest,
  getTokenSuccess,
  getTokenFaliure,

  /* Signup */
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  /* Login */
  loginRequest,
  loginSuccess,
  loginFailure,

  /* Logout */
  logoutRequest,
  logoutSuccess,
  logoutFailure,

  setData,
  getDataReguest,
  getDataSuccess,
  getDataFailure,
} = AuthSlice.actions;

export default AuthSlice.reducer;

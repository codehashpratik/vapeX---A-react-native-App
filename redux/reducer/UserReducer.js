import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  type: '',
  userInfo: {},
};

const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    /* get user profile */
    getUserInfoRequest(state, action) {
      state.type = action.type;
    },
    getUserInfoSuccess(state, action) {
      state.userInfo = action.payload;
      state.type = action.type;
    },
    getUserInfoFailure(state, action) {
      state.error = action.payload;
      state.type = action.type;
    },
  },
});

export const {
  /* get user profile */
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure,
} = UserSlice.actions;

export default UserSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  type: '',
  filterList: {},
};

const FilterSlice = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    addFilter(state, action) {
      state.type = action.type;
      state.filterList = action.payload;
    },
  },
});

export const {addFilter} = FilterSlice.actions;

export default FilterSlice.reducer;

/* eslint-disable linebreak-style */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../data/baseUrl';

export const fetchStaffs = createAsyncThunk('staff/fetchStaffs', async () => {
  const res = await fetch(baseUrl + 'staffs');
  console.log(res);
  const data = res.json();
  return data;
});
export const createStaffs = createAsyncThunk('staff/createStaffs', async (data) => {
  const res = await axios.post(baseUrl + 'staffs', data);
  return res.data;
});
const staffSlice = createSlice({
  name: 'staff', // tên chuỗi xác định slice
  initialState: {
    isLoading: false,
    err: null,
    data: []
  }, // giá trị khởi tạo ban đầu
  reducers: {},
  // tạo các action creator
  extraReducers: {
    [createStaffs.pending]: (state, action) => {
      console.log('pending createStaffs');
      state.data = action.payload;
      state.isLoading = false;
    },
    [fetchStaffs.pending]: (state, action) => {
      console.log('fetchStaffs pending');
      state.data = action.payload;
      state.isLoading = false;
    },
    [createStaffs.fulfilled]: (state, action) => {
      console.log('fulfilled createStaffs');
      state.data = action.payload;
      state.isLoading = false;
    },
    [fetchStaffs.fulfilled]: (state, action) => {
      console.log('fulfilled fetchStaffs');
      state.data = action.payload;
      state.isLoading = false;
    },
    [createStaffs.rejected]: (state, action) => {
      console.log('rejected createStaffs', action.payload);
      state.err = action.payload;
    }
  }
});
// export function createStaffs(todo) {
//   return function createStaffThunk(dispatch, getState) {
//     dispatch(staffSlice.actions.createStaff(todo));
//     console.log('Thunk Creator', getState());
//   };
// }

const { reducer } = staffSlice;
const staffReducer = reducer;
export default staffReducer; // ngầm hiểu chúng ta đang export counterSlice

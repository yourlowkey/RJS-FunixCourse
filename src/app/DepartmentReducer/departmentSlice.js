/* eslint-disable linebreak-style */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../data/baseUrl';

export const fetchDeparments = createAsyncThunk('department/fetchDeparments', async () => {
  const res = await fetch(baseUrl + 'departments');
  const data = res.json();
  return data;
});

const departmentSlice = createSlice({
  name: 'department', // tên chuỗi xác định slice
  initialState: {
    isLoading: false,
    err: null,
    data: []
  }, // giá trị khởi tạo ban đầu
  reducers: {},
  // tạo các action creator
  extraReducers: {
    [fetchDeparments.pending]: (state, action) => {
      console.log('fetchDeparments pending');
      state.data = action.payload;
      state.isLoading = true;
    },
    [fetchDeparments.fulfilled]: (state, action) => {
      console.log('fulfilled fetchDeparments');
      state.data = action.payload;
      state.isLoading = false;
    },
    [fetchDeparments.rejected]: (state, action) => {
      console.log('rejected fetchDeparments');
      state.err = action.payload;
      state.isLoading = true;
    }
  }
});

const { reducer } = departmentSlice;
const departmentReducer = reducer;
export default departmentReducer;

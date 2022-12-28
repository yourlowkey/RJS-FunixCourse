import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../data/baseUrl';

export const fetchDeparmentsDetail = createAsyncThunk(
  'departmentdetail/fetchDeparmentsDetail',
  async (departmentId) => {
    const res = await fetch(baseUrl + 'departments/' + departmentId);
    console.log('id', departmentId);
    const data = res.json();
    console.log('data', data);
    return data;
  }
);
const departmentDetailSlice = createSlice({
  name: 'departmentdetail', // tên chuỗi xác định slice
  initialState: {
    isLoading: false,
    err: null,
    data: null
  }, // giá trị khởi tạo ban đầu
  reducers: {},
  // tạo các action creator
  extraReducers: {
    [fetchDeparmentsDetail.pending]: (state, action) => {
      console.log('fetchDeparmentsDetail pending');
      state.data = action.payload;
      state.isLoading = true;
    },
    [fetchDeparmentsDetail.fulfilled]: (state, action) => {
      console.log('fulfilled fetchDeparmentsDetail', action.playload);
      state.data = action.payload;
      state.isLoading = false;
    }
  }
});

// const { reducer } = departmentDetailSlice;
const departmentDetailReducer = departmentDetailSlice.reducer;
export default departmentDetailReducer;

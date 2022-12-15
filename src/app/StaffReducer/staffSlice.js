/* eslint-disable linebreak-style */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../data/baseUrl';
// import { useEffect } from 'react';
// import { useState } from 'react';
// useEffect(() => {
//   fetch('https://rjs101xbackend.herokuapp.com/staffs')
//     .then((res) => res.json())
//     .then((result) => {
//       setStaffData(result);
//     });
// });
// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
//   const response = await client.get('/fakeApi/posts');
//   return response.data;
// });

export const fetchStaffs = createAsyncThunk('staff/fetchStaffs', async () => {
  const res = await fetch(baseUrl + 'staffs');
  console.log(res);
  const data = res.json();
  return data;
});

const staffSlice = createSlice({
  name: 'staff', // tên chuỗi xác định slice
  initialState: {
    isLoading: false,
    err: null,
    data: []
  }, // giá trị khởi tạo ban đầu
  reducers: {
    // tạo các action creator
    createStaff(state, action) {
      action.payload.id = [...state].pop().id + 1;
      state.push(action.payload);
      localStorage.setItem('staffList', JSON.stringify(state));
    }
  },
  // tạo các action creator
  extraReducers: (builder) => {
    builder
      .addCase(fetchStaffs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStaffs.fulfilled, (state, action) => {
        console.log({ action });
        state.data = action.payload;
        state.isLoading = false;
      });
  }
});
export function createStaffs(todo) {
  return function createStaffThunk(dispatch, getState) {
    dispatch(staffSlice.actions.createStaff(todo));
    console.log('Thunk Creator', getState());
  };
}

const { reducer, actions } = staffSlice;
// export const { createStaff } = actions; // export action
const staffReducer = reducer;
export const staffActions = actions;
export default staffReducer; // ngầm hiểu chúng ta đang export counterSlice

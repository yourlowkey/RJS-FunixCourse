/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';
import { STAFFS } from '../../data/StaffData';

const staffSlice = createSlice({
  name: 'staff', // tên chuỗi xác định slice
  initialState: localStorage.getItem('staffList')
    ? JSON.parse(localStorage.getItem('staffList'))
    : STAFFS, // giá trị khởi tạo ban đầu
  reducers: {
    // tạo các actions
    createStaff(state, action) {
      state.push(action.payload);
      localStorage.setItem('staffList', JSON.stringify(state));
    }
  }
});
const { actions, reducer } = staffSlice;
export const { createStaff } = actions; // export action
const staffReducer = reducer;
export default staffReducer; // ngầm hiểu chúng ta đang export counterSlice

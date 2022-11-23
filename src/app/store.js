import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import staffReducer from './StaffReducer/staffSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  form: formReducer,
  staff: staffReducer
});
console.log('form', rootReducer.form);
const store = configureStore({
  reducer: rootReducer
});

export default store;

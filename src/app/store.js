import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import staffReducer from './StaffReducer/staffSlice';
import departmentReducer from './DepartmentReducer/departmentSlice';
import { configureStore } from '@reduxjs/toolkit';
import departmentDetailReducer from './DepartmentReducer/departmentDetailSlice';
const rootReducer = combineReducers({
  form: formReducer,
  staff: staffReducer,
  department: departmentReducer,
  departmentdetail: departmentDetailReducer
});
const store = configureStore(
  {
    reducer: rootReducer
  },
  applyMiddleware(thunk, logger)
);

export default store;

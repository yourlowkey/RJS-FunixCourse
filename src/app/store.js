import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import staffReducer from './StaffReducer/staffSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  form: formReducer,
  staff: staffReducer
});
console.log('form', rootReducer.form);
const store = configureStore(
  {
    reducer: rootReducer
  },
  applyMiddleware(thunk, logger)
);

export default store;

import { reducer as formReducer } from 'redux-form';
import staffReducer from './StaffReducer/staffSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  form: formReducer,
  staff: staffReducer
};

const store = configureStore({
  reducer: rootReducer
});

export default store;

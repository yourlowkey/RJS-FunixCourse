import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import { createStaff } from '../app/StaffReducer/staffSlice';

function StaffForm(props) {
  // eslint-disable-next-line react/prop-types
  const { handleSubmit } = props;
  const dispatch = useDispatch();
  const handleCreateStaff = (data) => {
    console.log(data);
    const action = createStaff(data);
    dispatch(action);
  };
  return (
    <form onSubmit={handleSubmit((data) => handleCreateStaff(data))}>
      <div>
        <label htmlFor="staffName">Họ và tên</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="staffDob">Ngày sinh</label>
        <Field name="doB" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="">Số ngày đã làm thêm</label>
        <Field name="id" component="input" type="number" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default reduxForm({
  // a unique name for the form
  form: 'contact'
})(StaffForm);

import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { useDispatch } from 'react-redux';
import { createStaff } from '../app/StaffReducer/staffSlice';

function StaffForm(props) {
  console.log(props);
  // eslint-disable-next-line react/prop-types
  const { handleSubmit } = props;
  const dispatch = useDispatch();
  const handleCreateStaff = (data) => {
    const action = createStaff(data);
    dispatch(action);
    dispatch(reset('contact'));
  };

  return (
    <form onSubmit={handleSubmit((data) => handleCreateStaff(data))}>
      <div>
        <label htmlFor="staffName">Họ và tên</label>
        <Field defaultValue="" name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="staffDob">Ngày sinh</label>
        <Field defaultValue="" name="doB" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="">Số ngày đã làm thêm</label>
        <Field defaultValue="" name="id" component="input" type="number" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 2) {
    errors.name = 'Minimum be 2 characters or more';
  }
  return errors;
};
const staffForm = reduxForm({
  // a unique name for the form
  form: 'contact',
  validate: validate
})(StaffForm);
export default staffForm;

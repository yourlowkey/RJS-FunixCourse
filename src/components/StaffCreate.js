import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { useDispatch } from 'react-redux';
import { createStaffs } from '../app/StaffReducer/staffSlice';

function StaffForm(props) {
  // eslint-disable-next-line react/prop-types
  const { handleSubmit, submitRef } = props;
  console.log(props);
  const dispatch = useDispatch();
  const handleCreateStaff = (data) => {
    const actionThunk = createStaffs(data);
    dispatch(actionThunk);
    dispatch(reset('contact'));
  };

  return (
    <form
      onSubmit={handleSubmit((e) => {
        handleCreateStaff(e);
      })}>
      <div className="mb-3">
        <label>Họ và tên</label>
        <br />
        <Field defaultValue="" name="name" component="input" type="text" required />
      </div>
      <div className="mb-3">
        <label>Ngày sinh</label>
        <br />
        <Field defaultValue="" name="startDate" component="input" type="date" required />
      </div>
      <div className="mb-3">
        <label>Số ngày nghỉ</label>
        <br />
        <Field defaultValue="" name="annualLeave" component="input" type="number" required />
      </div>
      <div className="mb-3">
        <label>Ngày vào công ty</label>
        <br />
        <Field defaultValue="" name="doB" component="input" type="date" required />
      </div>
      <div className="mb-3">
        <label>Số ngày đã làm thêm</label>
        <br />
        <Field defaultValue="" name="overTime" component="input" type="number" required />
      </div>
      <button ref={submitRef} type="submit" style={{ display: 'none' }}>
        Submit
      </button>
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
  form: 'staffs',
  validate
})(StaffForm);
export default staffForm;

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDeparments } from '../app/DepartmentReducer/departmentSlice';
const DepartmentList = () => {
  const dispatch = useDispatch();
  const { isLoading: departmentLoading, data: DEPARTMENTS } = useSelector(
    (store) => store.department
  );
  useEffect(() => {
    dispatch(fetchDeparments());
  }, []);
  if (departmentLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return DEPARTMENTS.map((item) => (
    <div className="card m-3" key={item.id}>
      <h4 className="card-item">{item.name}</h4>
      <p>{'Số nhân viên:' + item.numberOfStaff}</p>
      <p>
        <td>
          <Link to={`/department/${item.id}`}>Details</Link>
        </td>
      </p>
    </div>
  ));
};

export default DepartmentList;

import React from 'react';
import { DEPARTMENTS } from '../data/StaffData';
const DepartmentList = () => {
  const staffDepartMentList = DEPARTMENTS.map((item) => (
    <div className="card m-3" key={item.id}>
      <h4 className="card-item">{item.name}</h4>
      <p>{'Số nhân viên:' + item.numberOfStaff}</p>
    </div>
  ));
  return staffDepartMentList;
};

export default DepartmentList;

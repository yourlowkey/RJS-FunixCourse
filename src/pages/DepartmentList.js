import React from 'react';
import {DEPARTMENTS} from '../data/StaffData';
import { Link } from 'react-router-dom';
const DepartmentList = () => {
  var staffDepartMentList = [];
  staffDepartMentList = DEPARTMENTS.map((item) => (
    <div className="">
      <div>
        <h4 className="card-item">{item.name}</h4>
        <p>
            {'Số nhân viên:' + item.numberOfStaff}
        </p>
      </div>
    </div>
  ));
  return staffDepartMentList;
};

export default DepartmentList;

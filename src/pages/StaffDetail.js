import React from 'react';
import { useParams } from 'react-router-dom';
import { STAFFS } from '../data/StaffData';
import { Link } from 'react-router-dom';
const StaffDetail = () => {
  const { staffId } = useParams();
  const staff = STAFFS.find((staff) => staff.id === parseInt(staffId));

  function isoDateParse(dateISO8601) {
    var d = new Date(dateISO8601);
    return d.getUTCDate() + '/' + (d.getUTCMonth() + 1) + '/' + d.getUTCFullYear();
  }

  return (
    <div>
      <div className="breadcrumb">
        <Link to={'/staff/'}>staff</Link>/ {staff.name}
      </div>
      {/* <img src={staff.image} alt="staff image" /> */}
      <h1>{`Họ và tên : ${staff.name}`}</h1>
      <p>{'Ngày sinh : ' + isoDateParse(staff.doB)} </p>
      <p>{'Ngày vào công ty : ' + isoDateParse(staff.startDate)}</p>
      {/* <p>{'Phong ban :' + staff.departments.name} </p> */}
      <p>{'Số ngày nghỉ : ' + staff.annualLeave}</p>
      <p>{'Số ngày đã làm thêm : ' + staff.overTime}</p>
    </div>
  );
};
export default StaffDetail;

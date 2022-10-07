import React from 'react';
import { useParams } from 'react-router-dom';
import {STAFFS} from '../data/StaffData';
const StaffDetail = () => {
  const { staffId } = useParams();
  const staff = STAFFS.find(staff => staff.id === parseInt(staffId));
  console.log(staff);
  console.log(typeof (staffId));
  function isoDate(dateISO8601) {
    var d = new Date(dateISO8601);
    return d.getUTCDate() + '/' + (d.getUTCMonth() + 1) + '/' + d.getUTCFullYear();
 }
  return (
    <div>
      {/* <img src={staff.image} alt="staff image" /> */}
      <h1>{`Họ và tên : ${staff.name}`}</h1>
      <p>{'Ngày sinh : ' + isoDate(staff.doB)} </p>
      <p>{'Ngày vào công ty : ' + isoDate(staff.startDate)}</p>
      {/* <p>{'Phong ban :' + staff.departments.name} </p> */}
      <p>{'Số ngày nghỉ : ' + staff.annualLeave}</p>
      <p>{'Số ngày đã làm thêm : ' + staff.overTime}</p>
    </div>
  );
};
export default StaffDetail;

import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const StaffDetail = () => {
  const { staffId } = useParams();
  const staffs = useSelector((store) => store.staff.data);
  const staff = staffs.find((staff) => staff.id === parseInt(staffId));

  function isoDateParse(dateISO8601) {
    var d = new Date(dateISO8601);
    return d.getUTCDate() + '/' + (d.getUTCMonth() + 1) + '/' + d.getUTCFullYear();
  }

  return (
    <div className="ps-3 mt-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={'/staff/'}>Staff</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {staff.name}
          </li>
        </ol>
      </nav>
      <h1>{`Họ và tên : ${staff.name}`}</h1>
      <p>{'Ngày sinh : ' + isoDateParse(staff.doB)} </p>
      <p>{'Ngày vào công ty : ' + isoDateParse(staff.startDate)}</p>
      <p>{'Số ngày nghỉ : ' + staff.annualLeave}</p>
      <p>{'Số ngày đã làm thêm : ' + staff.overTime}</p>
    </div>
  );
};
export default StaffDetail;

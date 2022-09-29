import React from 'react';
import { useParams } from 'react-router-dom';
import {STAFFS} from '../data/StaffData';
const StaffDetail = () => {
  const { staffId } = useParams();
  const staff = STAFFS.find((staff) => staff.id === staffId);
  return (
    <div>
      <img src={staff.images} alt="staff image" />
      <h1>Ho va ten : {staff.name}</h1>
      <p>Ngay sinh : {staff.doB} </p>
      <p>Ngay vao cong ty : {staff.startDate}</p>
      <p>Phong ban :{staff.departments.name} </p>
      <p>So ngay nghi :{staff.annualLeave}</p>
      <p>So ngay da lam them :{staff.overTime}</p>
    </div>
  );
};
export default StaffDetail;

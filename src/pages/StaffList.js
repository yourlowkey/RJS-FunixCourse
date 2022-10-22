import React from 'react';
import {STAFFS} from '../data/StaffData';
import { Link } from 'react-router-dom';

const StaffList = () => {
  var staffList = [];
  staffList = STAFFS.map((item) => (
      <div className="card col-sm-6 col-md-4 col-lg-2 mb-3">
        <img className="card-img-top mt-3" src={item.image} alt="Card image" />
        <div>
          <h4 className="card-item">{item.name}</h4>
          <p>
            <td>
              <Link to={`/staff/${item.id}`}>Details</Link>
            </td>
          </p>
        </div>
      </div>
  ));
  return (
    <div className='container'>
      <div className='row bg-red'>
        {staffList}
      </div>
    </div>
    
  )
  
};
export default StaffList;

import React from 'react';
import {STAFFS} from '../data/StaffData';
import { Link } from 'react-router-dom';
const StaffList = () => {
  var staffList = [];
  staffList = STAFFS.map((item) => (
      <div className="card col-md-4 col-sm-12 mb-3">
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
    <div className='row'>
        {staffList}
    </div>
  )
  
};
export default StaffList;

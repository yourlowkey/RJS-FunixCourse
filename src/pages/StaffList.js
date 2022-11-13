import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const StaffList = () => {
  const staffs = useSelector((state) => state.staff);

  const [staffRenderToScreen, setStaffRenderToScreen] = useState(staffs);

  const [input, setInput] = useState();

  const handleOnSearch = () => {
    const newStaffList = staffs.filter(
      (staff) => staff.name.toString().toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setStaffRenderToScreen(newStaffList);
    console.log('searched aray', newStaffList);
    console.log('search input', input);
  };
  console.log(staffRenderToScreen);
  const staffList = staffRenderToScreen.map((item) => (
    <div className="card col-sm-6 col-md-4 col-lg-2 m-2" key={item.id}>
      <img className="card-img-top mt-3 " src={item.image} alt="Card image" />
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
    <div className="container">
      <div className="row">
        <div>
          <input className="inputSearch" onChange={(e) => setInput(e.target.value)}></input>
          <button onClick={handleOnSearch}>Search</button>
        </div>
      </div>
      <div className="row">{staffList}</div>
    </div>
  );
};
export default StaffList;

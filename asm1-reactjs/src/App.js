import logo from './logo.svg';
import './App.css';
import { DEPARTMENTS, ROLE, STAFFS } from './appData/staffs';
import StaffInfor from './components/StaffInfor';
import React, { useState } from 'react';


function App() {
  const [currentStaff, setStaff] = useState(null);

  return (
    <div className="App">
      <nav> Ứng dụng quản lý nhân sự v1.0</nav> 
      {STAFFS.map(staff =>
      <div >
        <div className="StaffList"  key={staff.id} onClick={()=>setStaff(staff)}>
          {staff.name}
        </div>
      </div>
      )}

      {/* posts staff info using state */}
      {currentStaff && <StaffInfor
        staff={currentStaff}
      />}
    </div>
  );
}

export default App;

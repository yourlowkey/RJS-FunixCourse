import logo from './logo.svg';
import './App.css';
import {DEPARTMENTS, ROLE, STAFFS} from './appData/staffs';
import StaffList from './components/StaffListComponent';

function App() {
  
  return (
    <div className="App">
     
        {STAFFS.map(staff => ( 
          <StaffList
            key = {staff.id}
            doB = {staff.doB}
            startDate = {staff.startDate}
            department = {staff.department}
            annualLeave = {staff.annualLeave}
            overTime = {staff.overTime}
          />
        ))
        }
    </div>
  );
}

export default App;

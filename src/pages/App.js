import React from 'react';
import '../style.css';
import Header from '../components/Header';
import StaffList from './StaffList';
import DepartmentList from './DepartmentList';
import StaffDetail from './StaffDetail';
import SalaryTable from './SalaryTable';
import DepartmentDetail from './DepartmentDetail';
import Home from './Home';
import Test from './Test';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route className="Main">
            <Route index element={<Home />} />
            <Route path="staff" element={<StaffList />} />
            <Route path="staff/:staffId" element={<StaffDetail />} />
            <Route path="salary" element={<SalaryTable />} />
            <Route path="department" element={<DepartmentList />} />
            <Route path="department/:departmentId" element={<DepartmentDetail />} />
            <Route path="test" element={<Test />} />
          </Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

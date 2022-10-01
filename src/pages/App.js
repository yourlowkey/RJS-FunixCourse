import React from 'react';
import '../style.css';
import Header from '../components/Header';
import StaffList from './StaffList';
import DepartmentList from './DepartmentList';
import StaffDetail from './StaffDetail';
import SalaryTable from './SalaryTable';
import Home from './Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="staff" element={<StaffList />} />
          <Route path="staff/:staffId" element={<StaffDetail />} />
          <Route path="salary" element={<SalaryTable />} />
          <Route path="department" element={<DepartmentList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

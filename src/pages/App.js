import React from 'react';
import '../style.css';
import Header from '../components/Header';
import StaffList from './StaffList';
import DepartmentList from './DepartmentList';
import StaffDetail from './StaffDetail';
import SalaryTable from './SalaryTable';
import Home from './Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import { Provider } from 'react-redux';
import store from '../app/store';
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        {/* <Route path="/" element={<Header />} /> */}
        <Routes className="Main">
          <Route index element={<Home />} />
          <Route path="staff" element={<StaffList />} />
          <Route path="staff/:staffId" element={<StaffDetail />} />
          <Route path="salary" element={<SalaryTable />} />
          <Route path="department" element={<DepartmentList />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </Provider>
  );
}

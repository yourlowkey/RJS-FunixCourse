import { STAFFS, DEPARTMENTS } from "../data/StaffData";
const SalaryTable = () => {
  var staffList=[];
  staffList = STAFFS.map((item) => (
    <div className="container">
      <div className="card">
        <h4 className="card-item">{item.name}</h4>
        <p className="card-item">Mã nhân viên : {item.id}</p>
        <p className="card-item">Hệ số lương :{item.salaryScale}</p>
        <p className="card-item">Giờ làm thêm :{item.overTime}</p>
        <p>
          <td>
            <input type="text" value={'Lương : ' + parseInt(item.salaryScale * 3000000 + item.overTime * 200000)}/>
          </td>
        </p>
      </div>
    </div>
  ));
  return staffList;
};
export default SalaryTable;

import dateFormat, { masks } from "dateformat";
import './StaffInfor.css'
function StaffInfor({staff:{name,doB,startDate,department:{departmentName},annualLeave,overTime}}){
    return (
        <div className="StaffInfor">
                <h2>{name}</h2>
                <p >{`Ngày sinh: ${ dateFormat(doB, "paddedShortDate")}`}</p>
                <p>{`Ngày vào công ty: ${dateFormat(startDate,"paddedShortDate")}`}</p>
                <p>{`Phòng ban: ${ departmentName}`}</p>
                <p>{`Số ngày nghỉ còn lại: ${annualLeave}`}</p>
                <p>{`Số ngày đã làm thêm: ${overTime}`}</p>
        </div>  
    )
}
export default StaffInfor;
 
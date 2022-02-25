import dateFormat, { masks } from "dateformat";
function StaffInfor({staff:{name,doB,startDate,department:{departmentName},annualLeave,overTime}}){
    return (
        <div className="StaffInfor">
                <h2>{name}</h2>
                <p >{`Ngày sinh: ${ dateFormat(doB)}`}</p>
                <p>{`Ngày vào công ty: ${dateFormat(startDate)}`}</p>
                <p>{`Phòng ban ${ departmentName}`}</p>
                <p>{annualLeave}</p>
                <p>{overTime}</p>
        </div>  
    )
}
export default StaffInfor;
 

function StaffInfor({staff:{name,doB,startDate,department:{departmentName},annualLeave,overTime}}){
    return (
        <div className="StaffInfor">
                <h2>{name}</h2>
                <p>{doB}</p>
                <p>{startDate}</p>
                <p>{departmentName}</p>
                <p>{annualLeave}</p>
                <p>{overTime}</p>
        </div>  
    )
}
export default StaffInfor;
 
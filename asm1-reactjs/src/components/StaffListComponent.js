function StaffList(props){
    return (
        
        <div className="post-StaffList">
            
                <h2>{props.name}</h2>
                <p>{props.doB}</p>
                <p>{props.startDate}</p>
                <p>{props.department}</p>
                <p>{props.annualLeave}</p>
                <p>{props.overTime}</p>
            
        </div>
    )
}
export default StaffList;
const SingleProfile = ({empId, eName, dob, role}) =>{
    return(
        <>  
            <div className="single-profile-main">
                <div className="empid-line"><p>EMP ID :{empId}</p><p className="empid-right">{empId}</p></div>
                <p>Name :{eName}</p>
                <p>DOB :<span className="text-yellow">{dob}</span></p>
                <p>Role:<span className="text-green">{role}</span></p>
            </div>
        </>
    )
}

export default SingleProfile;
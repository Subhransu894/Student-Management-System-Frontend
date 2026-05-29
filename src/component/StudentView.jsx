import { useSelector,useDispatch } from "react-redux"
import { fetchStudents } from "../features/students/studentsSlice"
import { Link } from "react-router-dom"
import { useEffect } from "react"
const StudentView = ()=>{
    const dispatch = useDispatch()
    const {students,status,error} = useSelector((state)=>state.students)
    useEffect(()=>{
        dispatch(fetchStudents())
    },[])
    if(status === "loading"){
        return (
            <h2>Loading...</h2>
        )
    }
    if(status === "failed"){
        return (
            <h2>Error:{error}</h2>
        )
    }
    return (
        <div className="container mt-4">
            <div className="d-flex flex-column gap-2 mb-4">
                <h2>Student View</h2>
                <Link className="btn btn-primary btn-sm align-self-start" to="/add-student">Add Student</Link>
            </div>
            
            <h3>Students List</h3>
            {students.map((std)=>(
                <ul className="list-group ms-5">
                    <li key={std._id} className="list-item">
                        <Link to={`/details/${std._id}`} >
                            {std.name} (Age: {std.age})
                        </Link>
                    </li>
                </ul>
            ))}
        </div>
    )
}
export default StudentView
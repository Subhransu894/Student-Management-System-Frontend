import { useSelector } from "react-redux"
import { useParams,Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { fetchStudents,deleteStudentAsync } from "../features/students/studentsSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

const StudentDetails = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const students = useSelector((state)=>state.students.students)

    useEffect(()=>{
        if(students.length === 0){
            dispatch(fetchStudents())
        }
    },[dispatch,students.length])

    if(students.length === 0){
        return(
            <h2>Loading...</h2>
        )
    }

    const student = students.find((std)=> std._id === id ) 
    if(!student){
        return <h2>Student Not Found</h2>
    }
    const handleDelete = async()=>{
        await dispatch(deleteStudentAsync(student._id))
        navigate("/")
    }
    return (
        <>
            <div className="container mt-4">
                <h2 className="mb-4">Student Details</h2>
                <p>Name: {student.name}</p>
                <p>Age: {student.age}</p>
                <p>Grade: {student.grade}</p>
                <p>Attendance: {student.attendance}</p>
                <p>Marks: {student.marks}</p>
                <Link className="btn btn-primary me-2" state={student} to="/edit-student">Edit Student</Link>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}
export default StudentDetails
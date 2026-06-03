import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { addStudentAsync,updateStudentAsync } from "../features/students/studentsSlice"
const StudentForm =()=>{
    const location = useLocation()
    const student = location.state

    const [name,setName]=useState(student?.name || "")
    const [age,setAge]=useState(student?.age || "")
    const [grade,setGrade]=useState(student?.grade || "")
    const [gender,setGender]=useState(student?.gender || "")
    const [marks,setMarks] = useState(student?.marks || "")
    const [attendance,setAttendance] = useState(student?.attendance || "")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleForm=(e)=>{
        e.preventDefault()
        const newStudent={
            name,age,grade,gender,marks,attendance
        }
        // console.log(newStudent)
        if(student){
            //update the existing std
            dispatch(updateStudentAsync({
                id: student._id,
                updatedStudent: newStudent,
            }))
        }else{
            //add student
             dispatch(addStudentAsync(newStudent))
        }
        navigate("/")
    }
    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm ">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">{student ? "Edit Student" : "Add Student"}</h2>
                            <form onSubmit={handleForm}>
                                <div className="mb-3">
                                    <label className="form-label">Name:</label>
                                    <br />
                                    <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Age:</label>
                                    <br />
                                    <input type="number" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)} required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Grade:</label>
                                    <br />
                                    <input type="text" placeholder="Grade" value={grade} onChange={(e)=>{
                                        const value = e.target.value.toUpperCase()
                                        if(/^[OA-F]?\+?$/.test(value)){
                                            setGrade(value)
                                        }
                                    }} required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Marks:</label>
                                    <br />
                                    <input type="number" placeholder="Marks" value={marks} onChange={(e)=>setMarks(e.target.value)} required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Attendance:</label>
                                    <br />
                                    <input type="number" placeholder="Attendance" value={attendance} onChange={(e)=>setAttendance(e.target.value)} required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label d-block">Gender:</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" value="Male" checked={gender === "Male"} onChange={(e)=>setGender(e.target.value)} required/>
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input"  type="radio" value="Female" checked={gender === "Female"} onChange={(e)=>setGender(e.target.value)} />
                                        <label className="form-check-label">Female</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">{student ? "Update Student" : "Add Student"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StudentForm
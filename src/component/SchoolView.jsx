import { useDispatch,useSelector } from "react-redux";
import { updateSchoolStats,setTopStudent,fetchStudents } from "../features/students/studentsSlice";
import { useEffect } from "react";

const SchoolView =()=>{
    const dispatch = useDispatch()
    const {students , schoolStats , topStudent } = useSelector((state)=>state.students)
    //fetch students
    useEffect(()=>{
        if(students.length === 0){
            dispatch(fetchStudents())
        }
    },[dispatch,students.length])
    useEffect(()=>{

        if(students.length === 0) return 

        const totalStudents = students.length;
        const totalAttendance = students.reduce((acc,curr)=> acc+Number(curr.attendance || 0),0)
        const totalMarks = students.reduce((acc,curr)=>acc+Number(curr.marks || 0),0)
        const averageAttendance = totalStudents > 0 ? totalAttendance / totalStudents : 0;
        const averageMarks = totalStudents > 0 ? totalMarks / totalStudents : 0

        const topStudent = students.reduce((top,std)=>{
            if(!top || std.marks > top.marks){
                return std
            }
            else{
                return top
            }
        },null)
        dispatch(updateSchoolStats({totalStudents,averageAttendance,averageMarks}))
        dispatch(setTopStudent(topStudent))
    },[students,dispatch])
    return (
        <div className="container mt-4">
            <h1 className="mb-4">School View</h1>
            <p>Total Students:{" "} {schoolStats.totalStudents}</p>
            <p>Average Attendance: {" "} {schoolStats.averageAttendance.toFixed(2)}</p>
            <p>Average Marks: {" "} {schoolStats.averageMarks.toFixed(2)}</p>
            <p>Top Student: {" "} {topStudent ? topStudent.name : ""}</p>
        </div>
    )
}
export default SchoolView;
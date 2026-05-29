import { useDispatch, useSelector } from "react-redux";
import { setFilter,setSortBy,fetchStudents } from "../features/students/studentsSlice";
import { useEffect } from "react";

const ClassView = ()=>{
    const dispatch = useDispatch()
    const {students,filter,sortBy} = useSelector((state)=>state.students)
    useEffect(()=>{
        if(students.length === 0){
            dispatch(fetchStudents())
        }
    },[dispatch,students.length])

    const filterStudent = students.filter((std)=>{
        if(filter === "Boys"){
            return std.gender === "Male"
        }
        if(filter === "Girls"){
            return std.gender === "Female"
        }
        return true
    })
    const sortedStudent = [...filterStudent].sort((a,b)=>{
        if(sortBy === "name"){
            return a.name.localeCompare(b.name)
        }
        if(sortBy === "marks"){
            return b.marks-a.marks;
        }
        if(sortBy === "attendance"){
            return b.attendance - a.attendance
        }
        return 0;
    })
    const handleFilter = (e)=>{
        dispatch(setFilter(e.target.value))
    }
    const handleSortBy = (e)=>{
        dispatch(setSortBy(e.target.value))
    }
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Class View</h1>
            <div className="d-flex flex-column gap-3 mb-4">
                <div>
                    <label className="form-label mb-1">Filter By Gender:</label>
                    <select value={filter} onChange={handleFilter} className="form-select form-select-sm" style={{width:"120px"}}>
                        <option value="All">All</option>
                        <option value="Boys">Boys</option>
                        <option value="Girls">Girls</option>
                    </select>
                </div>
                <div>
                    <label className="form-label mb-1">Sort by:</label>
                    <select value={sortBy} onChange={handleSortBy} className="form-select form-select-sm" style={{width:"140px"}}>
                        <option value="name">Name</option>
                        <option value="marks">Marks</option>
                        <option value="attendance">Attendance</option>
                    </select>
                </div>
            </div>
            <ul className="ps-2">
                {sortedStudent.map((std)=>(
                    <li key={std._id} className="mb-2">
                        {std.name} - {std.gender} - Marks: {std.marks} - Attendance: {std.attendance}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ClassView;
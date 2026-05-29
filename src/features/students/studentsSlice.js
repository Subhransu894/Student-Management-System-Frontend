import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const fetchStudents = createAsyncThunk("students/fetchStudents",async()=>{
    const response = await axios.get("https://student-management-system-backend-u5xo.onrender.com/students")
    console.log(response);
    return response.data
})
export const addStudentAsync = createAsyncThunk("students/addStudent",async(newStudent)=>{
    const res = await axios.post("https://student-management-system-backend-u5xo.onrender.com/students",newStudent)
    console.log(res)
    return res.data
})
export const updateStudentAsync = createAsyncThunk("students/updateStudent",async({id,updatedStudent})=>{
    const res = await axios.post(`https://student-management-system-backend-u5xo.onrender.com/students/${id}`,updatedStudent)
    console.log(res)
    return res.data
})
export const deleteStudentAsync = createAsyncThunk("students/deleteStudent",async(id)=>{
    await axios.delete(`https://student-management-system-backend-u5xo.onrender.com/students/${id}`)
    return id
})
const initialState={
    students:[],
    status:"idle",
    error:null,
    filter:"All",
    sortBy:"name",
    schoolStats:{
        totalStudents:0,
        averageAttendance:0,
        averageMarks: 0,
    },
    topStudent:null,
}

const studentsSlice = createSlice({
    name:"students",
    initialState,
    reducers:{
        setFilter: (state,action)=>{
            state.filter = action.payload
        },
        setSortBy: (state,action)=>{
            state.sortBy = action.payload
        },
        updateSchoolStats: (state,action)=>{
            state.schoolStats = action.payload
        },
        setTopStudent: (state,action)=>{
            state.topStudent = action.payload
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchStudents.pending,(state)=>{
            state.status ="loading"
        })
        builder.addCase(fetchStudents.fulfilled,(state,action)=>{
            state.status = "success";
            state.students = action.payload;
        })
        builder.addCase(fetchStudents.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        builder.addCase(addStudentAsync.fulfilled,(state,action)=>{
            state.students.push(action.payload)
        })
        builder.addCase(updateStudentAsync.fulfilled,(state,action)=>{
            const index = state.students.findIndex((std)=> std._id === action.payload._id)
            if(index !== -1){
                state.students[index] = action.payload
            }
        })
        builder.addCase(deleteStudentAsync.fulfilled,(state,action)=>{
            state.students = state.students.filter((std)=>std._id !== action.payload)
        })
    }
})
export const {setFilter,setSortBy,updateSchoolStats,setTopStudent} = studentsSlice.actions;
export default studentsSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "../features/students/studentsSlice"
import authSlice from "../features/auth/authSlice"
console.log(studentsSlice);
const store = configureStore({
    reducer:{
        students: studentsSlice,
        auth: authSlice,
    }
})
export default store
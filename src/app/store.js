import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "../features/students/studentsSlice"
console.log(studentsSlice);
const store = configureStore({
    reducer:{
        students: studentsSlice
    }
})
export default store
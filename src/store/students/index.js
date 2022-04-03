import { createSlice } from "@reduxjs/toolkit";

const studentsReducer = createSlice({
    name: "students",
    initialState: {
        students: [],
    },
    reducers: {
        addStudent: (state, action) => {
            const { student } = action.payload;
            state.students.push(student);
        },
        removeStudent: (state, action) => {
            const { id } = action.payload;
            state.students = state.students.filter((student) => {
                return student.id !== id;
            });
        },
    },
});

export const { addStudent, removeStudent } = studentsReducer.actions;
export default studentsReducer.reducer;

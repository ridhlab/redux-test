import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./students";

export default configureStore({
    reducer: {
        students: studentsReducer,
    },
});

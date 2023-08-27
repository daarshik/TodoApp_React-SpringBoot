import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoslices";


const store = configureStore({
    reducer: {
        todoTaskManager: todoSlice
    }
})

export default store;
import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todolist: [],
  },
  reducers: {
    addTask: (state, action) => {
      const { id,text } = action.payload;
      
      console.log(text);
      state.todolist.push({ id, text });
      localStorage.setItem("todolist", JSON.stringify(state.todolist));
    },
    deleteTask: (state, action) => {
      state.todolist = state.todolist.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("todolist", JSON.stringify(state.todolist));
    },
    updateTask: (state, action) => {
      const { id, text } = action.payload;
      const taskToUpdate = state.todolist.find((item) => item.id === id);
      if (taskToUpdate) {
        taskToUpdate.text = text;
        localStorage.setItem("todolist", JSON.stringify(state.todolist));
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = todoSlice.actions;
export default todoSlice.reducer;

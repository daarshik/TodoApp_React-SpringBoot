// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Updatelist from "./Updatelist";
// import TodoList from "./TodoList";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/update/:id" element={<Updatelist />} />
//           <Route path="/" element={<TodoList />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }
import React from "react";
import "./App.css";
import TodoApp from "./components/todo/TodoApp";

const App = () => {
  return (
    <div className="App">
      <TodoApp />
      
    </div>
  );
};

export default App;




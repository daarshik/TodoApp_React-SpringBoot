import React from "react";
import "./TodoApp.css";
import LoginComponent from "../LoginComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "../ErrorComponent";
import ListTodosComponent from "../ListTodosComponent";

const TodoApp = () => {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />}></Route>
          <Route
            path="/welcome/:username"
            element={<WelcomeComponent />}
          ></Route>
          <Route path="/todos" element={<ListTodosComponent/>}></Route>
          <Route path="*" element={<ErrorComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default TodoApp;

import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "./redux/slices/todoslices";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Updatelist = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const { todolist } = useSelector((state) => state.todoTaskManager);
  const disptach = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const taskToUpdate = todolist.find((todo) => todo.id === id);
    setInputValue(taskToUpdate?.text);
  }, [setInputValue]);
  useEffect(() => {
    const storedTodolist = localStorage.getItem("todolist");
    if (storedTodolist) {
      disptach(addTask(JSON.parse(storedTodolist)));
    }
  }, [disptach]);
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const taskToUpdate = todolist.find((todo) => todo.id === id);
    const updatedTask = { ...taskToUpdate, text: inputValue };
    disptach(updateTask(updatedTask));
    navigate("/");
  };

  return (
    <div>
      <Row>
        <form onSubmit={handleUpdate}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button type="submit" className="btn btn-success">
            Update
          </button>
        </form>
      </Row>
    </div>
  );
};

export default Updatelist;

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "./redux/slices/todoslices";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");

  const disptach = useDispatch();
  const { todolist } = useSelector((state) => state.todoTaskManager);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: inputValue,
    };

    disptach(addTask(newTask));
    setInputValue("");
  };

  const handleDelete = (e, id) => {
    disptach(deleteTask(id));
  };

  useEffect(() => {
    const storedTodolist = localStorage.getItem("todolist");
    if (storedTodolist) {
      disptach(addTask(JSON.parse(storedTodolist)));
    }
  }, [disptach]);

  return (
    <Container>
      <Row className="d-flex align-items-center ">
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </Row>
      <Row>
        {todolist.length > 0 &&
          todolist?.map((item) => {
            return (
              <div key={item.id}>
                <li>{item.text}</li>
                <button
                  onClick={(e) => handleDelete(e, item.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    navigate(`/update/${item.id}`);
                  }}
                  className="btn btn-success"
                >
                  Update
                </button>
              </div>
            );
          })}
      </Row>
    </Container>
  );
};

export default TodoList;

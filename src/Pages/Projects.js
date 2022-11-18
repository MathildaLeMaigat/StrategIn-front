import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Rings } from "react-loader-spinner";

const Projects = ({ userToken }) => {
  //   console.log(userToken);
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTab = [...tasks];
    newTab.push({
      title: input,
      isDone: false,
    });
    setTasks(newTab);
    setInput("");
  };

  const handleChange = (index) => {
    const newTab = [...tasks];
    newTab[index].isDone = !newTab[index].isDone;
    setTasks(newTab);
  };

  const handleDelete = (index) => {
    const newTab = [...tasks];
    newTab.splice(index, 1);
    setTasks(newTab);
  };

  return (
    <div>
      <h1 className="tasks-title">Projects</h1>
      <div>
        <p>Projet 1</p>
        {tasks.map((task, index) => {
          return (
            <div key={index}>
              <input
                checked={task.isDone}
                type="checkbox"
                onChange={() => {
                  handleChange(index);
                }}
              ></input>
              <span className={task.isDone ? "is-done" : null}>
                {task.title}
              </span>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                🗑
              </button>
            </div>
          );
        })}
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            type="text"
            onChange={(event) => {
              setInput(event.target.value);
            }}
          ></input>
          <button type="Submit">Add task</button>
        </form>
      </div>
    </div>
  );
};

export default Projects;

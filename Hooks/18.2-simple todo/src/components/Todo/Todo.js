import React, { useState } from "react";
import "./Todo.css";

const Todo = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [data, setData] = useState(props.tasks);

  const handleIndex = (index) => {
    setActiveIndex(index);
    const change = data.map((task, idx) => {
      if (index === idx) {
        task.completed = !task.completed;
      }
      return task;
    });
    setData(change);
  };

  const mapping = () => {
    return props.tasks.map((task, index) => {
      return (
        <div key={index} className={task.completed ? "underline" : "line"}>
          {task.name}{" "}
          <button
            className={task.completed ? "Yes" : "No"}
            onClick={() => handleIndex(index)}
          ></button>
        </div>
      );
    });
  };
  console.log(activeIndex);

  return <div>{mapping()}</div>;
};

export default Todo;

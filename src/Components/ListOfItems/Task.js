import React from "react";
import "./Task.css";

const Task = (props) => {
  console.log("In Task.js");
  return (
    <div id="task-container">
      <h3 id="task-name">{props.title}</h3>
      <div id="task-description">{props.description}</div>
      <label htmlFor="delete" />
      <button htmlFor="delete" type="button" onClick={props.deleteFtn}>
        Delete
      </button>
    </div>
  );
};

export default Task;

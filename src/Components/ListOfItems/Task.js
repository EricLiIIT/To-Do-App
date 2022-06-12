import React from "react";
import "./Task.css";

const Task = (props) => {
  // console.log("In Task.js");
  return (
    <div className="task-container" id={props.title}>
      <h3>{props.title}</h3>
      <div id="task-description">{props.description}</div>
      <label htmlFor="delete" />
      <button
        htmlFor="delete"
        id="delete-button"
        type="button"
        onClick={() => props.onDelete()}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;

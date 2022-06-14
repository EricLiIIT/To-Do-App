import React from "react";
import "./Task.css";

const Task = (props) => {
  return (
    <div className="task-container" id={props.title}>
      <h3 id="task-title">{props.title}</h3>
      <div id="task-description">{props.description}</div>
      <div id="delete-btn-div">
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
    </div>
  );
};

export default Task;

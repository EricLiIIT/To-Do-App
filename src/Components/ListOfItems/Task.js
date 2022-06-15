import React from "react";
import { useState } from "react";
import "./Task.css";
import { BsTrash } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";

const Task = (props) => {
  const [status, setStatus] = useState(props.status);

  const updateStatus = () => {
    setStatus("Complete");
  };

  const editTask = () => {
    console.log("Editing task");
    return <div>Something new</div>;
  };

  const completeTask = () => {
    console.log("Completed task");
  };

  return true ? (
    <div className="task-container" id={props.title}>
      <h3 id="task-title">
        <input type="text" defaultValue={props.title} disabled></input>
      </h3>
      <div id="task-description">{props.description}</div>
      <div id="interaction-div">
        {/* <div id="task-status">
          <button type="button" id="status-button" onClick={updateStatus}>
            {status}
          </button>
        </div> */}
        <div id="buttons">
          <label htmlFor="complete" />
          <button
            type="button"
            className="buttons"
            id="complete-button"
            aria-label="Complete"
            onClick={completeTask}
          >
            <BsCheck2 />
          </button>

          <label htmlFor="edit" />
          <button
            type="button"
            className="buttons"
            id="edit-button"
            aria-label="Edit"
            onClick={editTask}
          >
            <BsPencilSquare />
          </button>

          <label htmlFor="delete" />
          <button
            type="button"
            className="buttons"
            id="delete-button"
            aria-label="Delete"
            onClick={() => props.onDelete()}
          >
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
  ) : (
    editTask()
  );
};

export default Task;

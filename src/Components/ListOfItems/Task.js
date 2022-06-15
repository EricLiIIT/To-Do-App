import React from "react";
import { useState } from "react";
import "./Task.css";
import { BsTrash } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";

const Task = (props) => {
  console.log(props);

  const [status, setStatus] = useState(props.status);
  const [title, setTitle] = useState(props.title);
  const [isDisabled, setIsDisabled] = useState(true);

  const enableEdit = () => {
    setIsDisabled(!isDisabled);
    if (isDisabled) {
      setTitle(title);
    }
    console.log(isDisabled);
  };

  const completeTask = () => {
    console.log("Completed task");
  };

  return (
    <div className="task-container" id={props.title}>
      <div id="task-title-div">
        <input
          type="text"
          className="task-input"
          id="task-title"
          value={title}
          disabled={isDisabled}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
      </div>
      <div id="task-description-div">
        <input
          type="text"
          className="task-input"
          id="task-description"
          value={props.description}
          disabled={isDisabled}
        ></input>
      </div>
      <div id="task-buttons">
        {/* <div id="task-status">
          <button type="button" id="status-button" onClick={updateStatus}>
            {status}
          </button>
        </div> */}
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
          onClick={enableEdit}
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
  );
};

export default Task;

import React from "react";
import { useState } from "react";
import "./Task.css";
import { BsTrash } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";

const Task = (props) => {
  console.log(props);

  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [status, setStatus] = useState(props.status);
  const [isDisabled, setIsDisabled] = useState(true);
  const [titleActive, setTitleActive] = useState("task-title");
  const [descriptionActive, setDescriptionActive] =
    useState("task-description");

  const enableEdit = () => {
    // allows to edit task shown, but not the original obj
    setIsDisabled(!isDisabled);
    setTitleActive("task-title"); // adds border around input
    setDescriptionActive("task-description");

    if (isDisabled) {
      setTitle(title);
      setDescription(description);
      setTitleActive("task-title-active");
      setDescriptionActive("task-description-active");
    }
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
          id={titleActive}
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
          id={descriptionActive}
          value={description}
          disabled={isDisabled}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
      </div>
      <div id="task-buttons">
        <div id="task-status">{status}</div>
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

import React from "react";
import { useState, useEffect } from "react";
import "./Task.css";
import { BsTrash, BsPencilSquare, BsCheck2 } from "react-icons/bs";
import { HiBan } from "react-icons/hi";

const Task = (props) => {
  console.log("Index: ", props.id);
  // console.log("Title: ", props.title, "Index: ", props.key);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [status, setStatus] = useState(props.status);
  const [statusBtnColor, setStatusBtnColor] = useState("complete-button");
  const [hoverStatus, setHoverStatus] = useState();

  // To include text transition animation
  const [statusStyles, setStatusStyles] = useState("task-status-incomplete");

  // Enabling/disabling task editing
  const [isDisabled, setIsDisabled] = useState(true);
  const [titleActive, setTitleActive] = useState("task-title");
  const [descriptionActive, setDescriptionActive] =
    useState("task-description");

  // allows for new tasks to be created while allowing editing of existing ones
  useEffect(() => {
    setTitle(props.title);
    setDescription(props.description);
  }, [props.title, props.description]);

  // Remove this and use vanilla html/css/js instead to prevent re-renders
  // const onHover = () => {
  //   if (status === "Incomplete") {
  //     setHoverStatus("Mark task as complete");
  //   }
  //   if (status === "Complete") {
  //     setHoverStatus("Mark task as incomplete");
  //   }
  // };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      enableEdit();
    }
  };

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

  const updateStatus = (status, id) => {
    console.log(props.id);
    console.log("in task.js, ", status, id);
    props.onStatusUpdate(status, id);
  };

  const completeTask = () => {
    // console.log(title);
    if (status === "Incomplete") {
      setStatus("Complete");
      updateStatus(status, props.id);
      setStatusBtnColor("uncomplete-button");
      setStatusStyles("task-status-complete");
    }
    if (status === "Complete") {
      setStatus("Incomplete");
      updateStatus(status, props.id);
      setStatusBtnColor("complete-button");
      setStatusStyles("task-status-incomplete");
    }
  };

  const deleteTask = () => {
    props.onDelete();
  };

  return (
    <div className="task-container" title={props.title} id={props.title}>
      <div id="label">{props.label}</div>
      <div id="task">
        <div id="task-title-div">
          <input
            type="text"
            className="task-input"
            id={titleActive}
            value={title}
            disabled={isDisabled}
            onChange={(e) => {
              // console.log("changing...");
              setTitle(e.target.value);
            }}
            onKeyPress={handleEnterKeyPress}
            aria-label={title}
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
            onKeyPress={handleEnterKeyPress}
            aria-label={description}
          ></input>
        </div>

        <div id="task-buttons">
          <div id={statusStyles}>{status}</div>
          <label htmlFor="complete" />
          <button
            type="button"
            className="buttons"
            id={statusBtnColor}
            title={hoverStatus}
            // onMouseOver={onHover}
            aria-label="Complete"
            onClick={completeTask}
          >
            {status === "Incomplete" ? <BsCheck2 /> : <HiBan />}
          </button>
          <label htmlFor="edit" />
          <button
            type="button"
            className="buttons"
            id="edit-button"
            title="Edit task"
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
            title="Delete task"
            aria-label="Delete"
            onClick={deleteTask}
          >
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;

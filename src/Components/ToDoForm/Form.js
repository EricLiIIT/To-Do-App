import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      id: Math.floor(Math.random() * 100000),
      title: title,
      description: description,
      status: status,
    };

    console.log("In Form.js");
    // console.log(status);
    console.log(task.id);
    props.onTaskCreate(task);
  };

  return (
    <div id="form-container">
      <form id="form" onSubmit={handleSubmit}>
        <div id="title">
          <label id="title-label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title-input"
            htmlFor="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div id="description">
          <label id="description-label" htmlFor="description">
            Description
          </label>
          <textarea
            type="textarea"
            id="description-input"
            htmlFor="decription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* <div id="status">
          <label id="status-label" htmlFor="status">
            Status
          </label>
          <input
            type="checkbox"
            id="status-input"
            htmlFor="status"
            value={status}
            onChange={(e) => setStatus(e.target.checked)}
          />
        </div> */}
        <div id="create">
          <label id="create-label" htmlFor="create" />
          <button type="submit" id="create-input" htmlFor="create">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

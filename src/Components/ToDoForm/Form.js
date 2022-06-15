import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      title: title,
      description: description,
      status: "Incomplete",
    };

    props.onTaskCreate(task);
  };

  return (
    <div id="form-container">
      <form id="form" onSubmit={handleSubmit}>
        <div id="title">
          <label id="title-label" htmlFor="title-input">
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
          <label id="description-label" htmlFor="description-input">
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
        <div id="create-button-div">
          <label id="create-label" htmlFor="create-button" />
          <button type="submit" id="create-button">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

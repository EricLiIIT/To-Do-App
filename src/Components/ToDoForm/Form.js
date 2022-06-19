import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  let labels = ["Work", "Personal", "Finance"];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [label, setLabel] = useState(labels[0].toString());

  const handleLabel = (event) => {
    setLabel(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLabel(label);
    const task = {
      title: title,
      description: description,
      status: "Incomplete",
      label: label,
    };

    props.onTaskCreate(task);

    if (title && description) {
      // Prevents form clearing with empty fields on submission
      setTitle("");
      setDescription("");
    }
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div id="description">
          <label id="description-label" htmlFor="description-input">
            Description
          </label>
          <textarea
            type="textarea"
            id="description-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div id="dropdown">
          <select value={label} onChange={handleLabel}>
            {labels.map((label, index) => (
              <option key={index} value={label}>
                {label}
              </option>
            ))}
          </select>
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

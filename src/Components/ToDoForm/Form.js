import { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            htmlFor="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            type="textarea"
            id="description"
            htmlFor="decription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <input
            type="checkbox"
            id="status"
            htmlFor="status"
            value={status}
            onChange={(e) => setStatus(e.target.checked)}
          />
        </div>
        <div>
          <label htmlFor="create" />
          <button type="submit" id="create" htmlFor="create">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

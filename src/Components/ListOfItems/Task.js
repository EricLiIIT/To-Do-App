import React from "react";

const Task = (props) => {
  console.log("In Task.js");
  return (
    <div>
      <h2>{props.title}</h2>
      <div>{props.description}</div>
    </div>
  );
};

export default Task;

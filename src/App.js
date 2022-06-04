import "./App.css";
import { useState } from "react";
import Form from "./Components/ToDoForm/Form";
import ShowTasks from "./Components/ListOfItems/ShowTasks";

function App() {
  const tasksArr = [];
  const [tasks, setTasks] = useState(tasksArr);

  const taskCreationHandler = (task) => {
    // prevTasks automatically given by react (new var name, but it's just tasksArr that is most recent)
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
    console.log("In app.js");
    console.log(tasksArr);
  };

  return (
    <div className="App">
      <Form onTaskCreate={taskCreationHandler} />
      <ShowTasks taskArray={tasks} />
    </div>
  );
}

export default App;

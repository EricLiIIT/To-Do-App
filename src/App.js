import "./App.css";
import { useState } from "react";
import Form from "./Components/ToDoForm/Form";
import ShowTasks from "./Components/ListOfItems/ShowTasks";

function App() {
  const [tasks, setTasks] = useState([]);
  console.log("In app.js");

  const taskCreationHandler = (task) => {
    // prevTasks automatically given by react (new var name, but it's just tasksArr that is most recent)
    setTasks((prevTasks) => {
      console.log("Previous tasks", [...prevTasks]);
      return [task, ...prevTasks]; // A NEW array is returned...
    });
  };

  const deleteTask = (title) => {
    console.log("In app.js deleting task");
    console.log("ID of task being deleted", title);
    const updatedArr = [...tasks].filter((task) => task.title !== title);
    console.log(updatedArr);
    setTasks(updatedArr);
  };

  return (
    <div className="App">
      <Form onTaskCreate={taskCreationHandler} />
      <ShowTasks taskArray={tasks} onTaskDelete={deleteTask} />
    </div>
  );
}

export default App;

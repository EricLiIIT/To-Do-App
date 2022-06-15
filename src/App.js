import "./App.css";
import { useState } from "react";
import Form from "./Components/ToDoForm/Form";
import ShowTasks from "./Components/ListOfItems/ShowTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    if (!task.title) {
      alert("Please enter a title in your task");
      return;
    }
    if (!task.description) {
      alert("Please enter a description in your task");
      return;
    }
    // prevTasks automatically given by react (new var name, but it's just tasksArr that is most recent)
    setTasks((prevTasks) => {
      return [task, ...prevTasks]; // A NEW array is returned...
    });
  };

  const deleteTask = (index) => {
    console.log("Deleted task at index ", index);
    const updatedArr = [...tasks];
    updatedArr.splice(index, 1);
    setTasks(updatedArr);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Form onTaskCreate={createTask} />
      <ShowTasks taskArray={tasks} onTaskDelete={deleteTask} />
      <div id="icon-ref">
        <a
          href="https://www.flaticon.com/free-icons/checklist"
          title="checklist icons"
        >
          Checklist icons created by Freepik - Flaticon
        </a>
      </div>
    </div>
  );
}

export default App;

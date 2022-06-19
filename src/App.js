import "./App.css";
import { useState } from "react";
import Form from "./Components/ToDoForm/Form";
import ShowTasks from "./Components/ListOfItems/ShowTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
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
      <main>
        <h1>To-Do List</h1>
        <Form onTaskCreate={createTask} />
        <ShowTasks taskArray={tasks} onTaskDelete={deleteTask} />
      </main>
      <footer id="icon-ref">
        <a
          href="https://www.flaticon.com/free-icons/checklist"
          title="checklist icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          Checklist icons created by Freepik - Flaticon
        </a>
      </footer>
    </div>
  );
}

export default App;

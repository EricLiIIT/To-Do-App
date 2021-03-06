import { useState, useEffect } from "react";
import Form from "../ToDoForm/Form";
import ShowTasks from "../ListOfItems/ShowTasks";
import "./ToDoContainer.css";

const ToDoContainer = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("tasks");
    if (localData !== null) setTasks(JSON.parse(localData));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  const updateStatus = (status, id) => {
    // console.log("in app.js", status, id); // update status in array @ this id
    // console.log(
    //   "In app.js task at id: ",
    //   id,
    //   "task: ",
    //   tasks.find((task) => task.key === id)
    // );
    const taskArr = [...tasks];
    const task = tasks.find((task) => task.key === id); // assign specific task to variable
    task.status = status; // update previous status with new status
    const index = tasks.findIndex((task) => task.key === id);
    tasks[index] = task;
    console.log(taskArr);
    setTasks(taskArr);
  };

  return (
    <div className="App">
      <main>
        <h1>To-Do List</h1>
        <Form onTaskCreate={createTask} />
        <ShowTasks
          taskArray={tasks}
          onTaskDelete={deleteTask}
          onStatusUpdate={updateStatus}
        />
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
};

export default ToDoContainer;

import { useState } from "react";
import Form from "../ToDoForm/Form";
import ShowTasks from "../ListOfItems/ShowTasks";
import "./ToDoContainer.css";

const ToDoContainer = () => {
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

  const updateStatus = (status, id) => {
    console.log("in app.js", status, id); // update status in array @ this id
    console.log(
      "In app.js task at id: ",
      id,
      "task: ",
      tasks.find((task) => task.key === id)
    );
    // let objIndex = tasks.findIndex((task) => task.id === id);
    // tasks[objIndex].status = status;
    // console.log("In app js, new status: ", tasks[objIndex].status);
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

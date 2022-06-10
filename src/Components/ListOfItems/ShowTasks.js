import Task from "./Task";
import "./ShowTasks.css";

const ShowTasks = (props) => {
  const deleteFtn = (title, index) => {
    console.log("Index of task being deleted: ", index);
    props.onTaskDelete(title); // Think over again about where/how you get the ID for a task
  };
  return props.taskArray.map((task, index) => (
    <div id="task-list">
      <Task
        key={index}
        title={task.title}
        description={task.description}
        onDelete={() => deleteFtn(task.title, index)}
      />
    </div>
  ));
};

export default ShowTasks;

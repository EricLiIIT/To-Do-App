import Task from "./Task";
import "./ShowTasks.css";

const ShowTasks = (props) => {
  const deleteFtn = (index) => {
    console.log("Index of task being deleted: ", index);
    props.onTaskDelete(index); // Think over again about where/how you get the ID for a task
  };

  return props.taskArray.map((task, index) => (
    <div id="task-list">
      <Task
        key={index}
        title={task.title}
        description={task.description}
        status={task.status}
        onDelete={() => deleteFtn(index)}
      />
    </div>
  ));
};

export default ShowTasks;

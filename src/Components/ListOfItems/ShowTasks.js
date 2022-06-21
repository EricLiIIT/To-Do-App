import Task from "./Task";
import "./ShowTasks.css";

const ShowTasks = (props) => {
  props.taskArray.forEach((task) => console.log(task.key));
  // console.log(props.taskArray.map());
  const deleteFtn = (index) => {
    props.onTaskDelete(index); // Think over again about where/how you get the ID for a task
  };

  const statusFtn = (status, id) => {
    props.onStatusUpdate(status, id);
    console.log("in show tasks.js", status, id);
  };

  return props.taskArray.map((task, index) => (
    <div id="task-list">
      <Task
        key={task.key}
        id={task.key}
        title={task.title}
        description={task.description}
        status={task.status}
        label={task.label}
        onDelete={() => deleteFtn(index)}
        onStatusUpdate={statusFtn}
      />
    </div>
  ));
};

export default ShowTasks;

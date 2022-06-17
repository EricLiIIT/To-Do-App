import Task from "./Task";
import "./ShowTasks.css";

const ShowTasks = (props) => {
  const deleteFtn = (index) => {
    props.onTaskDelete(index); // Think over again about where/how you get the ID for a task
  };

  return props.taskArray.map((task, index) => (
    <div id="task-list">
      <Task
        key={index}
        title={task.title}
        description={task.description}
        status={task.status}
        label={task.label}
        onDelete={() => deleteFtn(index)}
      />
    </div>
  ));
};

export default ShowTasks;

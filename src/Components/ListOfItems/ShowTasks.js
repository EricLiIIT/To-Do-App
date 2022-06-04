import Task from "./Task";
import "./ShowTasks.css";

const ShowTasks = (props) => {
  const deleteFtn = (id) => {
    console.log("pressed delete");
    console.log("ID", id);
  };
  return props.taskArray.map((task) => (
    <div id="task-list">
      <Task
        key={task.id}
        title={task.title}
        description={task.description}
        deleteFtn={() => deleteFtn(task.id)}
      />
    </div>
  ));
};

export default ShowTasks;

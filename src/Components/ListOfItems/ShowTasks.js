import Task from "./Task";
import "./ShowTasks.css";

const ShowTasks = (props) => {
  const deleteFtn = (e) => {
    console.log("pressed delete");
  };
  return props.taskArray.map((task) => (
    <div id="task-list">
      <Task
        key={task.id}
        title={task.title}
        description={task.description}
        deleteFtn={deleteFtn}
      />
    </div>
  ));
};

export default ShowTasks;

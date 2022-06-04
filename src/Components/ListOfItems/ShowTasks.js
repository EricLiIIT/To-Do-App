import Task from "./Task";

const ShowTasks = (props) => {
  return props.taskArray.map((task) => (
    <div>
      <Task key={task.id} title={task.title} description={task.description} />
    </div>
  ));
};

export default ShowTasks;

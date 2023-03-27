import { useSelector } from 'react-redux';

function TaskList() {
  const tasks = useSelector(state => state.task);
  return (
    <div>
      <p> Este es mi componente TaskList</p>
      <p>Bienvenidos a mi lista</p>
      <p>-----------------------------------------------------</p>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>ID={task.id}</h3>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}
export default TaskList;

import { useSelector, useDispatch } from 'react-redux';
import taskSlice from '../features/task/taskSlice';
import { deleteTask } from '../features/task/taskSlice';
import { Link } from 'react-router-dom';

function TaskList() {
  const tasks = useSelector(state => state.task);
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteTask(id));
  };
  return (
    <div>
      <header>
        <h1> Tienes: {tasks.length} tareas pendientes</h1>
        <Link to="/create-task">Create task</Link>
      </header>
      <p>Bienvenidos a la lista de tareas</p>
      <p>-----------------------------------------------------</p>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>ID={task.id}</h3>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <Link to={`/edit-task/${task.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
}

export default TaskList;

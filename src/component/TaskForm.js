import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addTask, editTask } from '../features/task/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Taskform() {
  const stateTask = useSelector(state => state.task);
  const [task, setTask] = useState({
    title: '',
    description: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  function handleOnChange(e) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({ ...task, id: uuid() }));
      navigate('/');
    }
  }
  useEffect(() => {
    if (params) {
      setTask(stateTask.find(task => task.id === params.id));
    }
  }, []);

  return (
    <div>
      <header>
        <Link to="/">Back to home</Link>
      </header>
      <p>Este es el componente Taskform</p>
      <p>Crea tu nueva tarea</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="title" onChange={handleOnChange} />
        <textarea name="description" placeholder="description" onChange={handleOnChange}></textarea>
        <button>save</button>
      </form>
    </div>
  );
}
export default Taskform;

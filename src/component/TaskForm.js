import { useState } from 'react';
import { useSelector } from 'react-redux';

function Taskform() {
  const stateTask = useSelector(state => state.task);
  const [task, setTask] = useState({
    title: '',
    description: '',
  });
  function handleOnChange(e) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(task);
  }
  return (
    <div>
      <p>Este es mi componente Taskform</p>
      <p>bienvenidos a mi form</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="title" onChange={handleOnChange} />
        <textarea name="description" placeholder="description" onChange={handleOnChange}></textarea>
        <button>save</button>
      </form>
    </div>
  );
}
export default Taskform;

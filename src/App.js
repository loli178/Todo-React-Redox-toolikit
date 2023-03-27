import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Taskform from './component/TaskForm';
import TaskList from './component/TaskList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<Taskform />} />
          <Route path="/edit-task/:id" element={<Taskform />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

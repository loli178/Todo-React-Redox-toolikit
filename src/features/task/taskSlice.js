import { createSlice } from '@reduxjs/toolkit';
//import { useState } from 'react';

// const ProbeState = function () {
//   const [name, setName] = useState('');
// };

// ESTO ES EQUIVALENTE A lo que esta enla funcion ProbeState
const initialState = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Task 1 esta es la description',
    completed: false,
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Task 2 esta es la description',
    completed: false,
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Task 3 esta es la description',
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      console.log(state);
      const findTask = state.find(task => task.id === action.payload);
      if (findTask) {
        state.splice(state.indexOf(findTask), 1);
      }
      /////////////////   elimina 1 elemnto desde el indice state.indexOf
      console.log(state.indexOf(findTask), 1);
      console.log(state.find(task => task.id === action.payload));
    },
    editTask: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;

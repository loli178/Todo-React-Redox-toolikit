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
  reducers: {},
});

export default taskSlice.reducer;

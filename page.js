'use client';

import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pastelPink font-poppins">
      <h1 className="text-4xl font-bold mb-8 text-pastelBlue animate-pulse">To-Do List</h1>
      <div className="w-full max-w-md p-4 bg-white rounded shadow-lg">
        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow p-2 border rounded-l"
          />
          <button onClick={addTask} className="p-2 bg-pastelBlue text-white rounded-r hover:bg-pastelPink transition duration-300">
            Add Task
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center p-2 bg-pastelBlue rounded text-white animate-fadeIn">
              <span
                className={`flex-grow ${task.completed ? 'line-through' : ''} cursor-pointer`}
                onClick={() => toggleTaskCompletion(index)}
              >
                {task.text}
              </span>
              <button onClick={() => removeTask(index)} className="ml-2 p-1 bg-red-500 rounded hover:bg-red-700 transition duration-300">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

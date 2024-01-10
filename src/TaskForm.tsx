
import React, { useState } from 'react';
import Task from './Task';

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== '') {
      const newTask: Task = {
        id: Date.now(),
        title,
        description,
        completed: false,
        date,
        time,
      };
      onAddTask(newTask);
      setTitle('');
      setDescription('');
      setDate('');
      setTime('');
    }
  };

  return (
    <div className = "main-container">
      <h2>Things I have to do: </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Date:
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Time:
          <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;

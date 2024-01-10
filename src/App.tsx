
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Task from './Task';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleToggleCompletion = (taskId: string | number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = (newTask: Task) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleEditTask = (taskId: string | number, updatedTask: Partial<Task>) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  const handleDeleteTask = (taskId: string | number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="tasks-container">
      <TaskList
        tasks={tasks}
        onToggleCompletion={handleToggleCompletion}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default App;

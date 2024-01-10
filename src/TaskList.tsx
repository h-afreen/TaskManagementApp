
import React, { useState } from 'react';
import Task from './Task';

interface TaskListProps {
  tasks: Task[];
  onToggleCompletion: (taskId: string | number) => void;
  onEditTask: (taskId: string | number, updatedTask: Partial<Task>) => void;
  onDeleteTask: (taskId: string | number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleCompletion, onEditTask, onDeleteTask }) => {
  const [editedTask, setEditedTask] = useState<Partial<Task>>({});

  const handleStartEditing = (taskId: string | number) => {
    setEditedTask({});
    onEditTask(taskId, { isEditing: true });
  };

  const handleSaveChanges = (taskId: string | number) => {
    onEditTask(taskId, { ...editedTask, isEditing: false });
  };

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          {task.isEditing ? (
            
            <div>
              <label>
                Title:
                <input
                  type="text"
                  value={editedTask.title || task.title}
                  onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                />
              </label>
              <label>
                Description:
                <textarea
                  value={editedTask.description || task.description}
                  onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                />
              </label>
              <label>
                Date:
                <input
                  type="date"
                  value={editedTask.date || task.date}
                  onChange={(e) => setEditedTask({ ...editedTask, date: e.target.value })}
                />
              </label>
              <label>
                Time:
                <input
                  type="time"
                  value={editedTask.time || task.time}
                  onChange={(e) => setEditedTask({ ...editedTask, time: e.target.value })}
                />
              </label>
              <button onClick={() => handleSaveChanges(task.id)}>Save Changes</button>
            </div>
          ) : (
    
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleCompletion(task.id)}
              />
              <span>{task.title}</span>
              <p>{task.description}</p>
              <p>Date: {task.date}</p>
              <p>Time: {task.time}</p>
              <button onClick={() => handleStartEditing(task.id)}>Edit</button>
              <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;

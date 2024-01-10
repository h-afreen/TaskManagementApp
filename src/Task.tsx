
interface Task {
  id: string | number;
  title: string;
  description: string;
  completed: boolean;
  date: string;
  time: string;
  isEditing?: boolean; 
}

export default Task;

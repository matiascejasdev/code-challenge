import React, { useEffect, useState } from 'react';
import './style/index.css';
import buttonImage from '../../assets/images/button-image.png';

interface AddTaskProps {
  addTask?: (task: string) => void;
}

const AddTask = ({ addTask }: AddTaskProps) => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState('');
  const [error, setError] = useState(false);
  const [repeatedTasks, setRepeatedTasks] = useState('');

  const handleTask = (e: any) => {
    e.preventDefault();
    setError(false);
    setRepeatedTasks(tasks.find((item) => item === task) || '');
    setTasks((prevState) => [...prevState, task]);
  };

  useEffect(() => {
    // When it finds on line 18 a task that already exists, it displays an error.
    if (tasks.length > 1 && repeatedTasks) {
      setError(true);
    } else {
      // Send the entered task to the main component 'ChallengeComponent.tsx'.
      task.length > 0 && addTask && addTask(task);
      setTask('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks, setTasks]);

  return (
    <form className='add-task-form' onSubmit={handleTask}>
      <div className='add-task-container'>
        <input
          className='add-task-input'
          type='text'
          placeholder='Add Task'
          onChange={(e) => {
            setTask(e.target.value);
            setError(false);
          }}
          value={task}
          maxLength={15}
        />
        <button type='submit' className='add-task-button' disabled={task.length > 0 ? false : true}>
          <img src={buttonImage} alt='' width='21px' height='21px' />
        </button>
      </div>
      <div className='error'> {error && 'This task already exists'}</div>
    </form>
  );
};

export default AddTask;

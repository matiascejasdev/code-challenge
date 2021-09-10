import React from 'react';
import './style/index.css';
import backArrow from '../../assets/images/back-arrow.png';
import forwardArrow from '../../assets/images/forward-arrow.png';

interface TaskProps {
  taskName: string;
  taskStatus: string;
  backTask: (task: string) => void;
  forwardTask: (task: string) => void;
}

const Task = ({ taskName, taskStatus, backTask, forwardTask }: TaskProps) => {
  //The name of the task is sent 'taskContainer/index.tsx', to identify the button that is pressed.
  const handleBackTask = () => {
    if (backTask) {
      backTask(taskName);
    }
  };

  const handleForwardTask = () => {
    if (forwardTask) {
      forwardTask(taskName);
    }
  };

  return (
    <div className='task'>
      <button
        className='back-button'
        onClick={handleBackTask}
        // It disables the left button when it is in 'To Do'
        disabled={taskStatus === 'To Do' ? true : false}>
        <img src={backArrow} alt='back arrow' />
      </button>
      <h1 className='task-name'>{taskName}</h1>
      <button
        className='forward-button'
        onClick={handleForwardTask}
        // It disables the left button when it is in 'Done'
        disabled={taskStatus === 'Done' ? true : false}>
        <img src={forwardArrow} alt='forward arrow' />
      </button>
    </div>
  );
};

export default Task;

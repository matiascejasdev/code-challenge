import React from 'react';
import './style/index.css';
import Task from '../task';

interface TaskContainerProps {
  taskStatus: string;
  taskList: string[];
  backTask?: (title: string) => void;
  forwardTask?: (title: string) => void;
}

const TaskContainer = ({ taskStatus, taskList, backTask, forwardTask }: TaskContainerProps) => {
  return (
    <div className='task-container'>
      <h1 className='task-status'>{taskStatus}</h1>
      <div className='task-list'>
        {taskList &&
          taskList?.map((taskName, i) => (
            <Task
              key={i}
              taskName={taskName}
              taskStatus={taskStatus}
              // The name of the task is sent to 'ChallengeComponent' to identify the button that is pressed and to be able to filter the list of tasks for each state.
              backTask={(task) => backTask && backTask(task)}
              forwardTask={(task) => {
                forwardTask && forwardTask(task);
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default TaskContainer;

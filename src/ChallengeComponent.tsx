import React, { useState } from 'react';
import AddTask from './components/formAddTask';
import TaskContainer from './components/taskContainer';

export function ChallengeComponent() {
  const [toDo, setToDo] = useState<string[]>([]);
  const [inProgress, setInProgress] = useState<string[]>([]);
  const [done, setDone] = useState<string[]>([]);

  return (
    <div className='challenge-container'>
      <div className='challenge-wrapper'>
        <TaskContainer
          taskStatus='To Do'
          taskList={toDo}
          //The lists are filtered based on the before or after status of the tasks that come from 'taskContainer/index.tsx '.
          forwardTask={(task) => {
            setToDo(toDo.filter((taskToDo) => taskToDo !== task));
            setInProgress((prevState) => [...prevState, task]);
          }}
        />
        <TaskContainer
          taskStatus='In Progress'
          taskList={inProgress}
          //The lists are filtered based on the before or after status of the tasks that come from 'taskContainer/index.tsx '.
          backTask={(task) => {
            setInProgress(inProgress.filter((inProgressTask) => inProgressTask !== task));
            setToDo((prevState) => [...prevState, task]);
          }}
          forwardTask={(task) => {
            setInProgress(inProgress.filter((inProgressTask) => inProgressTask !== task));
            setDone((prevState) => [...prevState, task]);
          }}
        />
        <TaskContainer
          taskStatus='Done'
          taskList={done}
          //The lists are filtered based on the before or after status of the tasks that come from 'taskContainer/index.tsx '.
          backTask={(task) => {
            setDone(done.filter((doneTask) => doneTask !== task));
            setInProgress((prevState) => [...prevState, task]);
          }}
        />
      </div>
      <AddTask addTask={(task) => setToDo((prevState) => [...prevState, task])} />
    </div>
  );
}

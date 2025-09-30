import { useState, useEffect } from 'react';
import { KanbanColumn } from './components/KanbanColumn/kanban-column';
import { TODO, IN_PROGRESS, DONE, NEXT, PREV } from './constants/index';
import { DataPropType } from './data/test';
import { fetchData, statusCodes } from './api/index';
import './App.css';

const updateItems = (tasks: DataPropType[], currentTaskId: number, statusCode: number, direction: string) => {

  if (statusCode === Object.keys(statusCodes).length - 1 && direction === NEXT) {
    return;
  }
  if (statusCode === 0 && direction === PREV) {
    return;
  }

  const updatedStatusCode = direction === 'next' ? statusCode + 1 : statusCode - 1;
  return tasks.map((item) =>
    item.id === currentTaskId
      ? {
        ...item,
        status: Object.keys(statusCodes).find(key => statusCodes[key as keyof typeof statusCodes] === updatedStatusCode) || item.status,
        statusCode: updatedStatusCode
      }
      : item
  );
}

function App() {
  const [tasks, setTasks] = useState<DataPropType[]>([]);

  const handleMoveTask = (task: DataPropType, direction: string) => {
    const updatedItems = updateItems(tasks, task.id, task.statusCode as number, direction);
    if (updatedItems) {
      setTasks(updatedItems);
    }

  };

  useEffect(() => {
    const data = fetchData();
    setTasks(data);
  }, []);

  return (
    <div className="App">
      <div className='kanban-columns'>
        {[TODO, IN_PROGRESS, DONE].map(status => {
          return (
            <KanbanColumn
              key={status}
              tasks={tasks}
              status={status}
              handleMoveTask={handleMoveTask}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;

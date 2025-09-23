import { useState, useEffect } from 'react';
import { KanbanColumn } from './components/KanbanColumn/kanban-column';
import { TODO, IN_PROGRESS, DONE } from './constants/index';
import { DataPropType } from './data/test';
import { fetchData } from './api/index';
import './App.css';

const updateItems = (tasks: DataPropType[], currentTaskId: number, status: string) => {
  return tasks.map((item) =>
    item.id === currentTaskId
      ? { ...item, status }
      : item
  );
}

function App() {
  const [tasks, setTasks] = useState<DataPropType[]>([]);

  const handleMoveNext = (task: DataPropType) => {
    if (task.status === TODO) {
      const updatedItems = updateItems(tasks, task.id, IN_PROGRESS);
      setTasks(updatedItems);
    }
    if (task.status === IN_PROGRESS) {
      const updatedItems = updateItems(tasks, task.id, DONE);
      setTasks(updatedItems);
    }
  };

  const handleMovePrev = (task: DataPropType) => {
    if (task.status === IN_PROGRESS) {
      const updatedItems = updateItems(tasks, task.id, TODO);
      setTasks(updatedItems);
    }
    if (task.status === DONE) {
      const updatedItems = updateItems(tasks, task.id, IN_PROGRESS);
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
              handleMoveNext={handleMoveNext}
              handleMovePrev={handleMovePrev}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;

import { Card } from '../Card/card';
import { DataPropType } from '../../data/test';

import './kanban-column.css';

interface KanbanColumnProps {
    status: string;
    tasks: DataPropType[];
    handleMoveTask: (tasks: DataPropType, direction: string) => void;
}

export const KanbanColumn = ({ status, tasks, handleMoveTask }: KanbanColumnProps) => {
    return (
        <div className='column-wrapper'>
            <h2>{status.toUpperCase()}</h2>
            <div className='column'>
                {tasks.map((task) => {
                    return task.status === status && <Card key={task.id} task={task} handleMoveTask={handleMoveTask} />
                })}
            </div>
        </div>
    )
}
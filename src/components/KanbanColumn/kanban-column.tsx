import { Card } from '../Card/card';
import { DataPropType } from '../../data/test';

import './kanban-column.css';

interface KanbanColumnProps {
    status: string;
    tasks: DataPropType[];
    handleMoveNext: (tasks: DataPropType) => void;
    handleMovePrev: (tasks: DataPropType) => void;
}

export const KanbanColumn = ({ status, tasks, handleMoveNext, handleMovePrev }: KanbanColumnProps) => {
    return (
        <div className='column-wrapper'>
            <h2>{status.toUpperCase()}</h2>
            <div className='column'>
                {tasks.map((task) => {
                    return task.status === status && <Card key={task.id} task={task} handleMoveNext={handleMoveNext} handleMovePrev={handleMovePrev} />
                })}
            </div>
        </div>
    )
}
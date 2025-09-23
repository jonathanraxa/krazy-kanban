import { Card } from '../Card/card';
import { DataPropType } from '../../data/test';

import './kanban-column.css';

interface KanbanColumnProps {
    status: string;
    tasks: DataPropType[];
    handleMoveNext: (tasks: DataPropType) => void;
    handleMovePrev: (tasks: DataPropType) => void;
    handleDeleteTask: (id: number) => void;
}

export const KanbanColumn = ({ status, tasks, ...taskHandlers }: KanbanColumnProps) => {
    return (
        <div className='column-wrapper'>
            <h2>{status.toUpperCase()}</h2>
            <div className='column'>
                {tasks.map((task) => {
                    return task.status === status && <Card key={task.id} task={task} {...taskHandlers} />
                })}
            </div>
        </div>
    )
}
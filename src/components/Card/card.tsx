import './card.css';
import { DataPropType } from '../../data/test';
import { statusCodes } from '../../api/index';
import { NEXT, PREV } from '../../constants/index';

interface CardPropsTypes {
    task: DataPropType;
    handleMoveTask: (task: DataPropType, direction: string) => void;
}


export const Card = ({
    task,
    handleMoveTask,
}: CardPropsTypes): React.ReactElement => {
    return (
        <div className="card-container">
            {task.statusCode !== 0 && <button className='button' onClick={() => handleMoveTask(task, PREV)}>{'<'}</button>}
            <p>{task.text}</p>
            {task.statusCode !== Object.keys(statusCodes).length - 1 && <button className='button' onClick={() => handleMoveTask(task, NEXT)}>{'>'}</button>}
        </div>
    )
}
import './card.css';
import { TODO, DONE } from '../../constants/index';
import { DataPropType } from '../../data/test';


interface CardPropsTypes {
    task: DataPropType;
    handleMovePrev: (task: DataPropType) => void;
    handleMoveNext: (task: DataPropType) => void;
    handleDeleteTask: (id: number) => void;
}
export const Card = ({
    task,
    handleMovePrev,
    handleMoveNext,
    handleDeleteTask,
}: CardPropsTypes): React.ReactElement => {
    return (
        <div className="card-container">
            <button className="delete-button" onClick={() => handleDeleteTask(task.id)}>X</button>
            {task.status !== TODO && <button className='move-button' onClick={() => handleMovePrev(task)}>{'<'}</button>}
            <p>{task.text}</p>
            {task.status !== DONE && <button className='move-button' onClick={() => handleMoveNext(task)}>{'>'}</button>}
        </div>
    )
}
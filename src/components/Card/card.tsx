import './card.css';
import { TODO, DONE } from '../../constants/index';
import { DataPropType } from '../../data/test';


interface CardPropsTypes {
    task: DataPropType;
    handleMovePrev: (task: DataPropType) => void;
    handleMoveNext: (task: DataPropType) => void;
}
export const Card = ({
    task,
    handleMovePrev,
    handleMoveNext,
}: CardPropsTypes): React.ReactElement => {
    return (
        <div className="card-container">
            {task.status !== TODO && <button className='button' onClick={() => handleMovePrev(task)}>{'<'}</button>}
            <p>{task.text}</p>
            {task.status !== DONE && <button className='button' onClick={() => handleMoveNext(task)}>{'>'}</button>}
        </div>
    )
}
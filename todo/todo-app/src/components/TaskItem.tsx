import React from 'react';
import { Task } from './Types'; 

// 型エイリアス．
type Props = {
    task: Task // Task型の変数task
    handleDone: (task: Task) => void // 返り値がvoid，引数にTask型のtaskを有するhandleDone関数．
    handleDelete: (task: Task) => void // 返り値がvoid，引数にTask型のtaskを有するhandleDelete関数．
};

const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete }) => {
    return (
            <li className={task.done ? "done list-group-item":"incomplete list-group-item"}>
                <label>
                    <input className="checkbox-input form-check-input me-1" type="checkbox" onClick={() => handleDone(task)} defaultChecked={task.done} />
                    <span className="checkbox-label">{ task.title }</span>
                </label>
                <button className="delete-btn btn btn-danger btn-sm" onClick={ () => handleDelete(task)}>
                    削除
                </button>
            </li>

    )
};

export default TaskItem;
import React from 'react';
import { Task } from './Types';
import { Button } from "react-bootstrap"; 

// 型エイリアス．
type Props = {
    task: Task // Task型の変数task
    handleDone: (task: Task) => void // 返り値がvoid，引数にTask型のtaskを有するhandleDone関数．
    handleDelete: (task: Task) => void // 返り値がvoid，引数にTask型のtaskを有するhandleDelete関数．
};

const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete }) => {
    return (
        <li className={ task.done ? 'done':'incomplete' }>
            <label>
                <input className="checkbox-input" type="checkbox" onClick={() => handleDone(task)} defaultChecked={task.done} />
                <span className="checkbox-label">{ task.title }</span>
            </label>
            <Button className="delete-btn" onClick={ () => handleDelete(task)}>
                削除
            </Button>
        </li>

    )
};

export default TaskItem;
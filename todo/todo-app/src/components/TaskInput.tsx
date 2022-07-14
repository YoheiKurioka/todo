import React,{ useState } from 'react'
import  { Task } from './Types'
// import button from 'react-bootstrap/button';

type Props = {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    tasks: Task[]
};

const TaskInput: React.FC<Props> = ({ setTasks,tasks }) => {
    const [inputTitle, setInputTitle] = useState<string>('');
    const [count, setCount] = useState<number>(tasks.length + 1);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value);
    };

    const handleSubmit = () => {
        setCount(count + 1);

        const newTask:Task = {
            id:count,
            title: inputTitle,
            done:false
        };

        setTasks([
            newTask, 
            ...tasks 
        ]);

        setInputTitle('');
    };

    return (
        <div className="input-form">
                <div className="input-cotainer input-group mb-3 w-50 p-3 position-absolute top-0 start-50 translate-middle-x">
                    <input className="task-input form-control" type="text" value={inputTitle} onChange={ handleInputChange } />
                    <button type="button" className="input-btn btn btn-dark" onClick={ handleSubmit }  >
                        追加
                    </button>
                    {/* <button variant="primary" onClick={ handleSubmit }>Primary</button>{' '} */}
                </div>
        </div>
    );
};

export default TaskInput;

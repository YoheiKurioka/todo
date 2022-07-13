import React,{ useState } from 'react'
import './App.css';
import { Task } from './components/Types'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import 'bootstrap/dist/css/bootstrap.min.css';



// Task型のリスト中身はJson形式．
// Jsonの定義はTypes.tsの記載に従う．
const initialState: Task[] = [
  {
    id: 2,
    title: 'Hello World',
    done: false
  },
  {
    id: 1,
    title: 'Start React Todo App by TS',
    done: false
  }
];

// React.FC型のApp変数．
// React.FCはReact.FunctionComponentの略．constによる型定義でコンポーネントを定義できる．
// コンポーネントとはReactオリジナルのタグで，タグの中でほかのタグをまとめて定義できる．
const App:React.FC = () => {
const [tasks, setTasks] = useState(initialState)
  return (
    <div className="todo-container">
      <div className="todo-component">
        <TaskInput setTasks={setTasks} tasks={tasks} />
        <TaskList setTasks={setTasks} tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
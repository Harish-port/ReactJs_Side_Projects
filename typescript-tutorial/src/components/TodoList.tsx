import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css';
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todos, setTodos }: Props) => {
    return (
        <div className="container">
            <div className="todos">
                <span className='todos__heading'>
                    Active Tasks
                </span>
                {
                    todos.map((todo) => (
                        <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
                    ))
                }
            </div>
            <div className="todos remove">
                <span className='todos__heading'>
                    Completed Tasks
                </span>
                {
                    todos.map((todo) => (
                        <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
                    ))
                }
            </div>
        </div>
    )
}

export default TodoList 
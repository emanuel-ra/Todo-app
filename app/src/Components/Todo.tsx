
import { Todo as ITodo } from "../interface";
import { useTodoStore } from "../stores/TodoStore";
import CrossIcon from "./Icons/CrossIcon";
import RadioInput from "./RadioInput";

interface Props {
  todo: ITodo;
}
function Todo(props:Props) {
  const { id, todo, status } = props.todo;
  const updateStatus = useTodoStore(state => state.updateStatus)
  const deleteTodo = useTodoStore(state => state.deleteTodo)
  const handleBehavior = () => {
    updateStatus({ todo: props.todo });
  };

  const handleDelete = () => {
    deleteTodo(id)
  }

  const isChecked = status==='active' ? false:true

  return (
    <li
      className={`flex border-b justify-between px-4 group cursor-pointer  todoItem
      ${
        isChecked
          ? 'text-light-grayish-blue dark:text-very-dark-grayish-blue'
          : 'text-very-dark-grayish-blue dark:text-light-grayish-blue'
      }
      `}
      data-id={id}
      data-todo={todo}
      data-status={status}
    >
      <div className='flex items-center'>
        <RadioInput callback={handleBehavior} isChecked={isChecked} />
        <span className={`${isChecked ? 'line-through' : ''}`}>{todo}</span>
      </div>
      <button
        className='hidden group-hover:flex px-4 py-2 items-center'
        onClick={handleDelete}
      >
        <CrossIcon />
      </button>
    </li>
  );
}

export default Todo;
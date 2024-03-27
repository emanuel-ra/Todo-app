import { Todo as ITodo } from "../interface";
import { useTodoStore } from "../stores/TodoStore";
import CrossIcon from "./Icons/CrossIcon";
import RadioInput from "./RadioInput";

interface Props {
  todo: ITodo;
  className?:string
}
function Todo(props: Props) {
  const { id, todo, status } = props.todo;
  const { className  } = props;
  const updateStatus = useTodoStore((state) => state.updateStatus);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const handleBehavior = () => {
    updateStatus({ todo: props.todo });
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  const isChecked = status === "active" ? false : true;

  return (
    <li
      className={`flex border-b-2 dark:border-very-dark-grayish-blue justify-between px-4 group cursor-pointer todoItem
      ${
        isChecked
          ? 'text-light-grayish-blue dark:text-very-dark-grayish-blue'
          : 'text-very-dark-grayish-blue dark:text-light-grayish-blue'
      }
      ${className}
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
        aria-label='Delete todo button'
        className='hidden group-hover:flex px-4 py-2 items-center'
        onClick={handleDelete}
      >
        <CrossIcon />
      </button>
    </li>
  );
}

export default Todo;

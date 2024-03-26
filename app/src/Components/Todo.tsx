
import { Todo } from "../interface";
import CrossIcon from "./Icons/CrossIcon";
import RadioInput from "./RadioInput";

interface Props {
  todo: Todo;
}
function Todo(props:Props) {
  const { id, todo, status } = props.todo;
  return (
    <li className='flex border-b justify-between px-4 group cursor-pointer todoItem' data-id={id} data-todo={todo} data-status={status} >
      <div className='flex items-center'>
        <RadioInput />
        {todo}
      </div>
      <button className='hidden group-hover:flex px-4 py-2  items-center'>
        <CrossIcon />
      </button>
    </li>
  );
}

export default Todo;
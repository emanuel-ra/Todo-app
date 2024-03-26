
import { Todo } from "../interface";
import CrossIcon from "./Icons/CrossIcon";
import RadioInput from "./RadioInput";

interface Props {
  todo: Todo;
}
function Todo(props:Props) {
  const { todo } = props.todo
  return (
    <div className='flex border-b justify-between px-4 group cursor-pointer'>
      <div className='flex items-center'>
        <RadioInput />
        {todo}
      </div>
      <button className='hidden group-hover:flex px-4 py-2  items-center'>
        <CrossIcon />
      </button>
    </div>
  );
}

export default Todo;
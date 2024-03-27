import { useTodos } from "../hooks/useTodos";

function Actions() {
  const { clearComplete  } = useTodos()
  return (
    <div className='flex text-sm'>
      <button onClick={clearComplete}>Clear Completed</button>
    </div>
  );
}

export default Actions
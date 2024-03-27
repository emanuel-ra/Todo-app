import { useTodos } from "../hooks/useTodos";

function Actions() {
  const { clearComplete  } = useTodos()
  return (
    <div className='flex text-sm'>
      <button
        aria-label='Remove complete todos'
        onClick={clearComplete}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default Actions
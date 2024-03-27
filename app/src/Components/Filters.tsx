import { useTodos } from "../hooks/useTodos";


interface Props {
  className?: string;
}
function Filters(props: Props) {
  const { className } = props;
  const { handleFilter  } = useTodos()
  return (
    <div className={`gap-x-4 ${className}`}>
      <button
        onClick={() => {
          handleFilter('all');
        }}
        className='hover:text-secondary'
      >
        All
      </button>
      <button
        onClick={() => {
          handleFilter('active');
        }}
        className='hover:text-secondary'
      >
        Active
      </button>
      <button
        onClick={() => {
          handleFilter('complete');
        }}
        className='hover:text-secondary'
      >
        Complete
      </button>
    </div>
  );
}

export default Filters
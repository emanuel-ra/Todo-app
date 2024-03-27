import { Filters as IFilters } from "../interface";

interface Props {
  className?: string;
  callback: (filter: IFilters) => void;
  filter: IFilters;
}
function Filters(props: Props) {
  const { className, callback, filter } = props;
  return (
    <div className={`gap-x-4  ${className}`}>
      <button
        role='button'
        aria-labelledby='Show all todos'
        onClick={() => callback('all')}
        className={`hover:text-secondary dark:hover:text-primary ${
          filter == 'all' && 'text-primary'
        } `}
      >
        All
      </button>
      <button
        role='button'
        aria-labelledby='Filter by active todos'
        onClick={() => callback('active')}
        className={`hover:text-secondary dark:hover:text-primary ${
          filter == 'active' && 'text-primary'
        } `}
      >
        Active
      </button>
      <button
        role='button'
        aria-labelledby='Filter by complete todos'
        onClick={() => callback('complete')}
        className={`hover:text-secondary dark:hover:text-primary ${
          filter == 'complete' && 'text-primary'
        } `}
      >
        Complete
      </button>
    </div>
  );
}

export default Filters;

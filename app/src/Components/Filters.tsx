import { useTodos } from "../hooks/useTodos";
import { Filters } from "../interface";

interface Props {
  className?: string;
  callback: (filter: Filters) => void;
  filter: Filters;
}
function Filters(props: Props) {
  const { className, callback, filter } = props;
  return (
    <div className={`gap-x-4  ${className}`}>
      <button
        onClick={() => callback("all")}
        className={`hover:text-secondary dark:hover:text-primary ${
          filter == "all" && "text-primary"
        } `}
      >
        All
      </button>
      <button
        onClick={() => callback("active")}
        className={`hover:text-secondary dark:hover:text-primary ${
          filter == "active" && "text-primary"
        } `}
      >
        Active
      </button>
      <button
        onClick={() => callback("complete")}
        className={`hover:text-secondary dark:hover:text-primary ${
          filter == "complete" && "text-primary"
        } `}
      >
        Complete
      </button>
    </div>
  );
}

export default Filters;

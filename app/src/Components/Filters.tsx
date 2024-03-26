

interface Props {
  className?: string;
}
function Filters(props: Props) {
  const { className } = props;
  return (
    <div className={`gap-x-4 ${className}`}>
      <button className='hover:text-secondary'>All</button>
      <button className='hover:text-secondary'>Active</button>
      <button className='hover:text-secondary'>Complete</button>
    </div>
  );
}

export default Filters
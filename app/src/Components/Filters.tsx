
function Filters() {
  return (
    <div className='flex gap-x-2'>
      <button className="hover:text-secondary">All</button>
      <button className="hover:text-secondary">Active</button>
      <button className="hover:text-secondary">Complete</button>
    </div>
  );
}

export default Filters
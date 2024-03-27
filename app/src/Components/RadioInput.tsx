import { useState } from "react";
import CheckIcon from "./Icons/CheckIcon";


interface Props{
    id?: string
    callback?: ()=>void
    isChecked?:boolean
}
function RadioInput(props:Props) {
    const { id, callback = () => {}, isChecked = false} = props;
    const [check, setCheck] = useState(isChecked);

    const handle = () => {
      setCheck(!check);
      callback();
    };
  return (
    <div className='px-4 py-4 group'>
      <label
        role='checkbox'
        htmlFor={id}
        aria-labelledby={id}
        className='size-6 flex justify-center items-center border-2  dark:border-primary bg-transparent p-1 rounded-full cursor-pointer          
            has-[:checked]:bg-gradient-to-br has-[:checked]:from-check-from has-[:checked]:to-check-to                 
            group-hover:bg-gradient-to-br group-hover:from-check-from  group-hover:to-check-to
    '
      >
        <span className={`${check ? 'block' : 'hidden'} transition`}>
          <CheckIcon />
        </span>
        <input
          aria-label='Checkbox for complete todos'
          type='checkbox'
          defaultChecked={check}
          className='sr-only peer'
          onChange={handle}
          id={id}
        />
      </label>
    </div>
  );
}

export default RadioInput
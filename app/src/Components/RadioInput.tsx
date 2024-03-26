import { useState } from "react";
import CheckIcon from "./Icons/CheckIcon";


interface Props{
    id?: string
}
function RadioInput(props:Props) {
    const { id } = props
    const [check,setCheck] = useState(false)

    const handle = ()=>{
        setCheck(!check)
    }
  return (
    <div className='px-4 py-4 group'>
      <label
        htmlFor={id}
        className='size-6 flex justify-center items-center border-2  dark:border-primary bg-transparent p-1 rounded-full cursor-pointer          
            has-[:checked]:bg-gradient-to-br has-[:checked]:from-check-from has-[:checked]:to-check-to                 
            group-hover:bg-gradient-to-br group-hover:from-check-from  group-hover:to-check-to
    '
      >
        <span className={`${check ? 'block' : 'hidden'} transition`}>
          <CheckIcon />
        </span>
        <input
          type='checkbox'
          defaultChecked={false}
          className='sr-only peer'
          onChange={handle}
          id={id}
        />
      </label>
    </div>
  );
}

export default RadioInput
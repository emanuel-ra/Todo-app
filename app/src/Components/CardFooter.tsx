import React from "react";

interface Props {
    children:React.ReactNode
}
function CardFooter(props:Props) {
    const {children} = props
  return (
    <div className='flex justify-between items-center px-10 py-2 text-sm text-very-dark-grayish-blue dark:text-very-dark-grayish-blue font-semibold'>
      {children}
    </div>
  );
}

export default CardFooter
import React from "react";

interface Props {
    children:React.ReactNode
}
function Card(props:Props) {
    const { children } = props
  return <div className='w-3/4 lg:w-1/2 bg-white dark:bg-secondary rounded shadow-lg'>    
    {children}
    </div>;
}

export default Card
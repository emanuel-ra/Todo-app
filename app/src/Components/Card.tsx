import React from "react";

interface Props {
    id?:string
    children: React.ReactNode;
    reference: React.RefObject<HTMLUListElement>
}
function Card(props:Props) {
    const { id, children, reference } = props;
  return (
    <ul
      id={id}
      ref={reference}
      className='w-3/4 lg:w-1/2 bg-white dark:bg-secondary rounded shadow-lg text-lg mb-5'
    >
      {children}
    </ul>
  );
}

export default Card
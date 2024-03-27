import React from "react";

interface Props {
  children: React.ReactNode;
}
function CardFooter(props: Props) {
  const { children } = props;
  return (
    <div
      id="no-drag"
      className="flex justify-between items-center px-10 py-4 text-sm text-very-dark-grayish-blue dark:text-light-grayish-blue font-semibold"
    >
      {children}
    </div>
  );
}

export default CardFooter;

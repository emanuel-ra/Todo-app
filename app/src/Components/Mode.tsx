import React from "react";
import { useModeStore } from "../stores/ModeStore";

interface Props {
    
    children:React.ReactNode
}

function Mode(props:Props) {
  const mode = useModeStore(state => state.mode)
    const { children} = props
  return (
    <div data-mode={mode}>
        {children}
    </div>
  )
}

export default Mode
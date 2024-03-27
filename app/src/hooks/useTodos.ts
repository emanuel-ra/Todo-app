import { useMemo, useState } from 'react';
import type { Filters } from '../interface';
import { useTodoStore } from '../stores/TodoStore';
export const useTodos = () => {
    const [filter, setFilter] = useState<Filters>('all');

  const addTodo = useTodoStore((state) => state.addTodo);
  const todos = useTodoStore((state) => state.todos);
  const updateTodos = useTodoStore((state) => state.updateTodos);
    const clearComplete = useTodoStore((state) => state.clearComplete);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const isChecked = (
      document.getElementById('newCheckTodo') as HTMLInputElement
    ).checked;
    const NewTodo = (document.getElementById('NewTodo') as HTMLInputElement)
      .value;

    const status = isChecked ? 'complete' : 'active';
    addTodo({ todo: NewTodo, status: status });

    (document.getElementById('NewTodo') as HTMLInputElement).value = '';
  };

    const handleFilter = (filter:Filters) =>{      
        setFilter(filter);
    }

    const filterTodos = useMemo(()=>{
        return filter === 'active' 
            ? [...todos].filter(todo => todo.status == 'active')
            : filter === 'complete'
                ? [...todos].filter(todo => todo.status == 'complete')
                : todos
    },[filter,todos])
    

  return {
    todos: filterTodos,
    filter ,
    updateTodos,
    handleSubmit,
    clearComplete,
    handleFilter,
  };
};


import { useTodoStore } from '../stores/TodoStore';



export const useTodos = () => {
  
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

  return {
    todos,
    updateTodos,
    handleSubmit,
    clearComplete
  };
};

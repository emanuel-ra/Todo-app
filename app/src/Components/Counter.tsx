import { useTodoStore } from "../stores/TodoStore";


function Counter() {
    const todos = useTodoStore(state => state.todos)

    const count = todos.filter(todo => todo.status === 'active').length

  return <div className="">{count} items left</div>;
}

export default Counter
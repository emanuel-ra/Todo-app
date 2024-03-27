import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Status, Todo } from '../interface';
import { data } from '../setup/data';

interface TodoState {
  todos: Todo[];
  addTodo: ({ todo, status }: { todo: string; status: Status }) => void;
  updateTodos: ({ todos }: { todos: Todo[] }) => void;
  updateStatus:({todo}:{todo:Todo})=>void
  deleteTodo: (id:string) => void
  clearComplete: ()=>void
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => {
      return {
        todos: data,
        addTodo: ({ todo, status }: { todo: string; status: Status }) => {
          const { todos } = get();

          const clone = structuredClone(todos);

          const newTodo: Todo = {
            id: self.crypto.randomUUID(),
            todo: todo,
            status: status,
          };

          clone.push(newTodo);

          set({ todos: clone });
        },
        updateTodos: ({ todos }: { todos: Todo[] }) => {
          set({ todos });
        },
        updateStatus: ({ todo }: { todo: Todo }) => {
          const { todos } = get();
          const index = todos.findIndex((item) => item.id === todo.id);
          const clone = structuredClone(todos);

          clone[index].status =
            todo.status === 'active' ? 'complete' : 'active';

          set({ todos: clone });
        },
        deleteTodo: (id: string) => {
          const { todos } = get();
          const newTodos = todos.filter((todo) => todo.id !== id);
          set({ todos: newTodos });
        },
        clearComplete:()=>{
          const { todos } = get()
          const newTodos = todos.filter(todo => todo.status === 'active')
          set({todos:newTodos})
        }
      };
    },
    { name: 'FRONTEND::MENTOR::TODO:LIST' }
  )
);

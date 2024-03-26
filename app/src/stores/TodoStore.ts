import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Status, Todo } from '../interface';

interface TodoState {
  todos: Todo[];
  addTodo: ({ todo, status }: { todo: string; status: Status }) => void;
  updateTodos: ({ todos }: { todos: Todo[] }) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => {
      return {
        todos: [],
        addTodo: ({ todo, status }: { todo: string; status: Status }) => {
          const { todos } = get();

          const clone = structuredClone(todos);

          const newTodo: Todo = {
            id: self.crypto.randomUUID() ,
            todo: todo,
            status: status,
          };

          clone.push(newTodo);

          set({ todos: clone });
        },
        updateTodos: ({ todos }: { todos: Todo[] }) => {
          set({todos})
        }
      };
    },
    { name: 'FRONTEND::MENTOR::TODO:LIST' }
  )
);

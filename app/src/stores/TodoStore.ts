import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Status, Todo } from '../interface';

interface TodoState {
  todos: Todo[];
  addTodo: ({ todo, status }: { todo: string; status: Status }) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => {
      return {
        todos: [],
        addTodo: ({ todo, status }: { todo: string; status: Status }) => {
          const { todos } = get();
          const newTodo: Todo = {
            id: self.crypto.randomUUID() ,
            todo: todo,
            status: status,
          };
          todos.push(newTodo);
          set({ todos });
        },
      };
    },
    { name: 'FRONTEND::MENTOR::TODO:LIST' }
  )
);

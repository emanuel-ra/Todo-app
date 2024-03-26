import type { DNDPlugin } from '@formkit/drag-and-drop';
import { addEvents, animations, parents } from '@formkit/drag-and-drop';
import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import React, { useEffect } from 'react';
import Banner from '../Components/Banner';
import Card from '../Components/Card';
import MoonIcon from '../Components/Icons/MoonIcon';
import SunIcon from '../Components/Icons/SunIcon';
import InputText from '../Components/InputText';
import Mode from '../Components/Mode';
import RadioInput from '../Components/RadioInput';
import Todo from '../Components/Todo';
import { Todo as ITodo, Status } from '../interface';
import { useModeStore } from '../stores/ModeStore';
import { useTodoStore } from '../stores/TodoStore';
import './App.css';

function App() {
  const mode = useModeStore((state) => state.mode);
  const toggleMode = useModeStore((state) => state.toggleMode);

  const handleClick = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    toggleMode(newMode);
  };

  const addTodo = useTodoStore((state) => state.addTodo);
  const todos = useTodoStore((state) => state.todos);
  const updateTodos = useTodoStore(state => state.updateTodos)
  
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

  // DRAG AND DROP
  const dragHandlerPlugin: DNDPlugin = (parent) => {
    const parentData = parents.get(parent);
    if (!parentData) return;

    function dragend() {     
      const items = (document.getElementsByClassName('todoItem') as HTMLCollectionOf<HTMLLIElement>)
      const todos = Array.from(items).map(item => item)
      const NewTodos: ITodo[] = [];
      todos.map(li => {
        
        const TODO: ITodo = {
          id: li.dataset.id as string,
          todo: li.dataset.todo as string,
          status: li.dataset.status as Status ,
        };
        NewTodos.push(TODO);        
      })

      updateTodos({ todos: NewTodos });
    }

    return {
      setup() {},
      teardown() {},
      setupNode(data) {
        data.nodeData.abortControllers.customPlugin = addEvents(data.node, {
          dragend: dragend,
        });
      },
      tearDownNode(data) {
        if (data.nodeData?.abortControllers?.customPlugin) {
          data.nodeData?.abortControllers?.customPlugin.abort();
        }
      },
      setupNodeRemap() {},
      tearDownNodeRemap() {},
    };
  };
  const [parent, list, setList] = useDragAndDrop<HTMLUListElement, ITodo>(todos, {
    plugins: [animations(), dragHandlerPlugin],
  });
  // * This update the drag and drop list
  useEffect(() => {
    setList(todos);
  },[todos]);
  
  return (
    <Mode>
      <div className='wrapper'>
        <main className='relative flex flex-col'>
          <Banner />
          <div className='w-full absolute flex flex-col items-center justify-center mt-10 md:mt-16 lg:mt-28 '>
            <div className='w-3/4 lg:w-1/2 flex justify-between'>
              <h1
                className='text-2xl lg:text-4xl font-bold text-white tracking-[.4em] lg:tracking-[.5em]
'
              >
                TODO
              </h1>
              <button onClick={handleClick}>
                {mode == 'light' ? <MoonIcon /> : <SunIcon />}
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className='w-3/4 lg:w-1/2 h-12 flex items-center p-0 shadow-lg  bg-white dark:bg-secondary rounded mt-10 mb-5 px-4 text-lg'
            >
              <RadioInput id='newCheckTodo' />
              <InputText id='NewTodo' placeholder='Create a new todo...' />
            </form>

            <Card reference={parent}>
              {list?.map((todo) => (
                <Todo key={todo.id} todo={todo} />
              ))}
            </Card>

          </div>
        </main>
      </div>
    </Mode>
  );
}

export default App;

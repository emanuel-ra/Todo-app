import React from 'react';
import Banner from '../Components/Banner';
import Card from '../Components/Card';
import MoonIcon from '../Components/Icons/MoonIcon';
import SunIcon from '../Components/Icons/SunIcon';
import InputText from '../Components/InputText';
import Mode from '../Components/Mode';
import RadioInput from '../Components/RadioInput';
import Todo from '../Components/Todo';
import { useModeStore } from '../stores/ModeStore';
import { useTodoStore } from '../stores/TodoStore';
import './App.css';

function App() {
  const mode = useModeStore(state => state.mode)
  const toggleMode = useModeStore((state) => state.toggleMode);
 
  const handleClick = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    toggleMode(newMode);
  };

  const addTodo = useTodoStore(state => state.addTodo)
  const todos = useTodoStore(state => state.todos)

  const handleSubmit = (e:React.SyntheticEvent)=>{
    e.preventDefault();

    const isChecked = (
      document.getElementById('newCheckTodo') as HTMLInputElement
    ).checked;
    const NewTodo = (document.getElementById('NewTodo') as HTMLInputElement)
      .value;

      const status = isChecked ? 'complete':'active'
      addTodo({ todo: NewTodo, status: status });

      (document.getElementById('NewTodo') as HTMLInputElement).value="";
  }

  return (
    <Mode>
      <div className='wrapper'>
        <main className='relative flex flex-col'>
          <Banner />
          <div className='w-full absolute flex flex-col items-center justify-center mt-10 md:mt-16 lg:mt-28 '>
            <div className='w-3/4 lg:w-1/2 flex justify-between'>
              <h1
                className='text-2xl lg:text-4xl font-bold text-white tracking-[.4em] lg:tracking-[.8em]
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
              className='w-3/4 lg:w-1/2 h-11 flex items-center p-0 shadow-lg  bg-white dark:bg-secondary rounded mt-10 mb-5'
            >
              <RadioInput id='newCheckTodo' />
              <InputText id='NewTodo' placeholder='Create new TODO...' />
            </form>

            <Card>{todos?.map(todo => (<Todo key={todo.id} todo={todo} />))}</Card>
          </div>
        </main>
      </div>
    </Mode>
  );
}

export default App

import type { DNDPlugin } from "@formkit/drag-and-drop";
import { addEvents, animations, parents } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { useEffect, useState } from "react";
import Actions from "../Components/Actions";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import CardFooter from "../Components/CardFooter";
import Counter from "../Components/Counter";
import Filters from "../Components/Filters";
import Footer from "../Components/Footer";
import MoonIcon from "../Components/Icons/MoonIcon";
import SunIcon from "../Components/Icons/SunIcon";
import InputText from "../Components/InputText";
import Mode from "../Components/Mode";
import RadioInput from "../Components/RadioInput";
import Todo from "../Components/Todo";
import { useMode } from "../hooks/useMode";
import { useTodos } from "../hooks/useTodos";
import type { Filters as IFilters } from "../interface";
import { Todo as ITodo, Status } from "../interface";
import "./App.css";

function App() {
  const [filter, setFilter] = useState<IFilters>("all");
  const { mode, handleMode } = useMode();
  const { handleSubmit, todos, updateTodos } = useTodos();

  const handleFilter = (filter: IFilters) => {
    setFilter(filter);
  };

  // * DRAG AND DROP PLUGIN
  const dragHandlerPlugin: DNDPlugin = (parent) => {
    const parentData = parents.get(parent);
    if (!parentData) return;

    function dragend() {
      const items = document.getElementsByClassName(
        "todoItem"
      ) as HTMLCollectionOf<HTMLLIElement>;
      const list = Array.from(items).map((item) => item);
      const NewTodos: ITodo[] = [];
      list.map((li) => {
        const TODO: ITodo = {
          id: li.dataset.id as string,
          todo: li.dataset.todo as string,
          status: li.dataset.status as Status,
        };
        NewTodos.push(TODO);
      });
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

  // * INIT DRAG AND DROP
  const [parent, list, setList] = useDragAndDrop<HTMLUListElement, ITodo>(
    todos,
    {
      draggable: (el) => {
        return el.id !== "no-drag";
      },
      plugins: [animations(), dragHandlerPlugin],
    }
  );

  // * This update the drag and drop list
  useEffect(() => {
    setList(todos);
  }, [todos]);

  useEffect(() => {
    let filtered: ITodo[] = todos;
    if (filter != "all")
      filtered = todos.filter((todo) => todo.status === filter);

    setList(filtered);
  }, [filter]);
  return (
    <Mode>
      <div className='wrapper'>
        <main className='relative flex flex-col'>
          <Banner />
          <div className='w-full absolute flex flex-col items-center justify-center mt-10 md:mt-16 lg:mt-28 '>
            <div className='w-3/4 lg:w-1/2 flex justify-between'>
              <h1
                className='text-2xl lg:text-4xl font-bold text-white tracking-[.4em] lg:tracking-[.5em] animate-flip-down animate-once animate-duration-1000'
              >
                TODO
              </h1>
              <button
                role='button'
                className='px-4 py-2'
                onClick={handleMode}
                aria-labelledby='Toggle dark and light mode button'
              >
                {mode == 'light' ? (
                  <MoonIcon className='animate-fade-down animate-once animate-duration-1000 animate-ease-in-out animate-fill-forwards' />
                ) : (
                  <SunIcon className='animate-fade-down animate-once animate-duration-1000 animate-ease-in-out animate-fill-forwards' />
                )}
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
              {list?.map((todo, index) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  className={`${
                    index % 2 === 0 ? 'animate-fade-left' : 'animate-fade-right'
                  } animate-once animate-duration-1000`}
                />
              ))}

              <CardFooter>
                <Counter />
                <Filters
                  callback={handleFilter}
                  filter={filter}
                  className='hidden md:flex '
                />
                <Actions />
              </CardFooter>
            </Card>

            <div className='w-3/4 lg:w-1/2 flex justify-center bg-white dark:bg-secondary rounded shadow-lg md:hidden mb-5 py-2'>
              <Filters
                callback={handleFilter}
                filter={filter}
                className='flex '
              />
            </div>

            <div className='text-sm text-very-dark-grayish-blue dark:dark:text-light-grayish-blue mb-10 animate-flip-down animate-once animate-duration-1000'>
              Drag and drop to reorder list
            </div>
            <Footer />
          </div>
        </main>
      </div>
    </Mode>
  );
}

export default App;

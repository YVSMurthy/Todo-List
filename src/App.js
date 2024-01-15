import { ContextProvider } from './contexts/TodoContext';
import { useState, useEffect } from 'react';
import { TodoForm, TodoItem } from './components/index';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, {id: Date.now(), ...todo}])
  }

  const editTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const completeTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))   // always takes string inputs
  }, [todos])

  return (
    <ContextProvider value={{todos, addTodo, editTodo, deleteTodo, completeTodo}}>
      <div className="min-h-screen py-8 px-10 bg-[#172842] flex justify-center">
        <div className="w-full h-screen rounder-lg shadow-md p-5 mx-10">
          <h1 className="text-4xl font-semibold text-white text-center mb-7"> TO DO List</h1>

          <div className="py-5 px-12 mb-4 rounded-md">
            <TodoForm />
          </div>

          <div id="tasks" className="py-6 px-12 rounded-md"> 
            {todos.map((todo) => (
              <div key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;

import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[ {
        id: 1,
        title: "Todo Title",
        completed: false
    } ],
    
    addTodo: (todo) => {},
    editTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    completeTodo: (id) => {}
})

export const ContextProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}
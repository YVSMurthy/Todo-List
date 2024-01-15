import { useTodo } from "../contexts/TodoContext"
import { useState } from "react";

export default function TodoItem({todo}) {
    const [isEditable, setIsEditable] = useState(false)
    const [task, setTask] = useState(todo.title)
    const {editTodo, deleteTodo, completeTodo} = useTodo();

    const edit = () => {
        editTodo(todo.id, {...todo, title:task})
        setIsEditable(false)
    }   
    return (
        <div className={`w-full px-4 py-3 mb-5 rounded-md flex items-center
        ${todo.completed ? "bg-green-300" : "bg-yellow-200" }`}>
            <input type="checkbox" className="cursor-pointer mr-5"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}/>

            <input type="text" className={`w-full px-2 py-2 font-semibold text-l rounded-s bg-transparent focus:outline-none
            ${isEditable ? "border-black px-2" : "border-transparent"}
            ${todo.completed ? "line-through" : ""}`}
            readOnly={!isEditable}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />

            <button className="bg-pink-300 px-3 py-2 mx-3 rounded-md hover:bg-pink-400"
            disabled={todo.completed}
            onClick={() => {
                if (todo.completed) return;

                if (isEditable) {
                    edit();
                } else setIsEditable((prev) => !prev);
            }}> 
            {isEditable ? "💾" : "✏️"}
            </button>

            <button className="bg-pink-300 px-3 py-2 rounded-md hover:bg-pink-400"
            onClick={() => deleteTodo(todo.id)}> 
            {"❌"}
            </button>
        </div>
    )
}
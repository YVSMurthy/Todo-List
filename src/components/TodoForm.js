import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

export default function TodoForm() {
    const [task, setTask] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        // e.preventDefault()
      
        addTodo({title: task, completed: false})
        setTask("")

    }

    return (
        <div className="flex">
            <input type="text" placeholder="Enter the task to do ..."
                className="w-full h-10 py-2 px-4 text-black rounded-l-md focus:outline-none"
                value={task}
                onChange={(e) => 
                    setTask(e.target.value)
            }></input>

            <button className="w-40 h-10 py-2 px-2 font-semibold rounded-r-md bg-green-400 hover:bg-green-500"
            onClick={(e) => add(e)}> Add Task </button>
        </div>
    )
}
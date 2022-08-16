import React, { useState, useEffect } from "react";
import axios from "axios";

const Todos = () => {
    const [todoList, setTodoList] = useState(null);

    useEffect(() => {
        (async () => {
            const todos = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
            setTodoList(todos.data);
        })();
    }, []);

    // return (
    //     <div style={{ padding: "15px" }}>
    //         {
    //             todoList && todoList.map((todo, index) => (
    //                 <li key={index} data-testid="todo" >{todo.title}</li>
    //             ))
    //         }
    //     </div>
    // );
    return todoList ? (
        <ul>
            {todoList.map((todo, index) => (
                <li key={index} data-testid='todo'>{todo.title}</li>
            ))}
        </ul>
    ) : (
        <p>Loading....</p>
    );
};


export default Todos;
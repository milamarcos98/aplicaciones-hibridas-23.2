import { useState } from "react";
import "./TodoList.scss"
import Item from "./Item";
import Toast from "./Toast";

const TodoList = () => {
    const [ inputTask, setInputTask ] = useState('');
    const [ list, setList ] = useState([]);

    const handleAddTodo = () =>{
        // agregar todo nuevo
        const newTodo = {
            todo: inputTask,
            done: false
        }

        setList([...list, newTodo]);
        setInputTask('');
    }

    const handleToogleDone = () =>{
        // alternar true/false del done
    }

    const handleDeleteTodo = () =>{
        // eliminar un todo
    }

    const handleInputChange = (event) =>{
        // evento change del input
        setInputTask(event.target.value)
    }
    return  (
    <div className="Todo">
        <Toast state={"success"} position="top-right" mensaje={"mensajito"}/>
        <h1>TodoList</h1>
        <div className="input_container">
            <input onChange={handleInputChange} type="text" className="input" value={inputTask}/>
            <button className="btn" onClick={handleAddTodo}>Agregar</button>
        </div>
        <ul>
            {
                list.map((todo) => (
                    <Item  todo={todo} handleDeleteTodo={handleDeleteTodo} handleToogleDone={handleToogleDone} />
                ))
            }
        </ul>
    </div>
    );
}

export default TodoList;
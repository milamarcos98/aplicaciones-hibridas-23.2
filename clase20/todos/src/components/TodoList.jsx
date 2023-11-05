import { useState } from "react";
// import "./TodoList.scss"
import Item from "./Item";
import Toast from "./Toast";
import styles from "./TodoList.module.scss";

const TodoList = () => {
    const [ inputTask, setInputTask ] = useState('');
    const [ list, setList ] = useState([]);
    const [showToast, setShowToast ] = useState({});

    const handleAddTodo = () =>{
        // agregar todo nuevo
        const newTodo = {
            todo: inputTask,
            done: false
        }

        setList([...list, newTodo]);
        setInputTask('');
        setShowToast({mensaje: "Creado correctamente!", state: "success", position: "bottom-left"})
        setTimeout(() => {
            setShowToast({})
        }, 4000);
    }

    const handleToogleDone = () =>{
        // alternar true/false del done
    }

    const handleDeleteTodo = () =>{
        // eliminar un todo
        setShowToast({mensaje: "Eliminado!", state: "danger", position: "top-left"})
        setTimeout(() => {
            setShowToast({})
        }, 4000);
    }

    const handleInputChange = (event) =>{
        // evento change del input
        setInputTask(event.target.value)
    }
    return  (
    <div className={styles.Todo}>
        {
           Object.keys(showToast).length > 0 && <Toast state={showToast.state} position={showToast.position} mensaje={showToast.mensaje}/>
            }
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
const Item = ({todo, handleToogleDone, handleDeleteTodo}) =>{
return (
    <li className="task">{todo.todo}</li>
);
}

export default Item;
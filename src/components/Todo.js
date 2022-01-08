import React from "react";

function Todo(props) {
    return (
        <div>
            <li>
          <div style={{ textDecoration: props.completed ? "line-through" : "" }}>           
            <input 
                id={props.id} 
                defaultChecked={props.completed} 
                type="checkbox" 
                className="checkbox" 
                onChange={() => props.toggleTask(props.id)}
                onClick={() => props.completeTask(props.id)}
            />
            <label className="todo-0">
              {props.name}
            </label>
          </div>
          <div className="task-info"> 
            <button className="delete-task" onClick={() => {props.deleteTask(props.id)}}>
              Delete
            </button>
          </div>
        </li>       
        </div>
    );
}

export default Todo;
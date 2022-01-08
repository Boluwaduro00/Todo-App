import React, {useState} from "react";

function Form(props) {
    const [name, setName] = useState("");

    function handleSubmit(e) {
            e.preventDefault();
            if (!name) return;
            props.addTask(name);
            setName('') 
    }

    function handleChange(e) {
        setName(e.target.value)
    }
    return(
        <form onSubmit={handleSubmit}>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input">
              Enter a new task
            </label>
          </h2>

          <div className="todo-form">
            <input 
            placeholder="Enter task"
              type="text"
              name="text"
              className="todo-input"
              autoComplete="off"
              value={name}
              onChange={handleChange}
            />
            <button type="submit">+</button>
          </div>
        </form>
    )
}

export default Form;
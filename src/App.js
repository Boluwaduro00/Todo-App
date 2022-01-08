import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import { v4 as uuidv4 } from 'uuid';


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTask(id) {
    const updatedTask = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
  })
    setTasks(updatedTask);
  }

  const taskList = tasks.map(task => (
    <Todo
    id={task.id} 
    name={task.name}
    key={task.id}
    index={task.id}
    completed={task.completed}
    deleteTask={deleteTask}
    toggleTask={toggleTask}
    completeTask={completeTask}
    />
  )
  );

  function completeTask(id) {
    const newTodo = [...tasks];
    setTasks(newTodo);
  }

  function newTask(name) {
    const newTodo = {name: name, id : uuidv4(), completed : false}
    setTasks([...tasks, newTodo]);
  }

  function deleteTask(id) {
    const newTodo = [...tasks]
    newTodo.splice(id, 1)
    setTasks(newTodo)
  }

  return (
    <div className="todo-app">
      <header>
        <h1>My ToDo Application</h1>    
        <p>All Task(s): {tasks.length}</p>
      </header>

      <div className="new-todo">
        <Form addTask={newTask} />
      </div>

      {/* <div className="tasks">
        <FilterButton name="Active"/>
        <FilterButton name="All"/>
        <FilterButton name="Completed"/>
      </div> */}

      <ul className="todos">
        {taskList}
      </ul>
    </div>
  );
}

export default App;

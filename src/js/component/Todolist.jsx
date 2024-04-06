import React, { useState } from 'react'

const Todolist = () => {

    const [tasks, setTasks] = useState(["Make the bed", "Clean the room"])
    const [newTask, setNewTask] = useState("")

    function addTask(e) {
        if(e.key === "Enter" && newTask.trim() !== "") { // Checkea que la tarea escrita no este vacia y borra los espacios en blanco de antes y despues. Y tambien que se pulse Enter claro
            const trimmedTask = newTask.trim(); // borra los espacios en blanco de antes y despues
            const capitalizedTask = trimmedTask.charAt(0).toUpperCase() + trimmedTask.slice(1); // chartAt(0).toUpperCase() pone la primera letra en mayuscula y slice(1) añade el resto
            setTasks([...tasks, capitalizedTask])
            setNewTask("")
        }
    }

    function deleteTask(indexToDelete) {
        setTasks(tasks.filter((task, index) => index !== indexToDelete))
    }

    return (
        <div className="container-fluid">
            <div className='row d-flex justify-content-center mt-5'>
                <h1 className='col-12 text-center'>TO DO LIST</h1>
                <div>
                    <input type="text" onChange={(e)=>setNewTask(e.target.value)} onKeyDown={addTask} value={newTask} className="form-control input-task col-5"/>
                    <ul className="ps-0">
                        {tasks.length === 0 ? <p>No tasks, add tasks</p> : 
                        tasks.map((task,index) =>
                        <li key={index} className="form-control input-task col-5 d-flex justify-content-between align-items-center"
                        >{task}<i onClick={()=>deleteTask(index)} className="fa-solid fa-xmark btn fs-2"></i>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todolist
import React, { useState } from 'react'

const Todolist = () => {

    const [tasks, setTasks] = useState(["Make the bed"])
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
        <> 
            <div className="main-wrapper">
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-lg-5">
                        <ul className="ul-title">
                            <li className="d-flex align-items-center">
                            <div className="lines-title"></div>
                            <h1>TO DO LIST</h1>
                            </li>    
                        </ul>
                        {tasks.length === 0 ? <input type="text" onChange={(e)=>setNewTask(e.target.value)} onKeyDown={addTask} value={newTask} className="list ps-3 input-no-tasks input-task" placeholder="No tasks, add your tasks here"/> 
                        : 
                        <input type="text" onChange={(e)=>setNewTask(e.target.value)} onKeyDown={addTask} value={newTask} className="list ps-3 input-task" placeholder="Add your new task"/>}
                        <ul className="list">
                            {tasks.map((task,index) =>
                            <>       
                                <li key={index} className="d-flex align-items-center">
                                <div className="lines-task"></div>
                                {task}
                                <i onClick={()=>deleteTask(index)} className="fa-solid fa-xmark btn fs-2"></i>
                                </li>
                            </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="fixed-bottom p-4 text-center fw-semibold text-white">
                Copyright © Made with ❤️ by JorgeAJT, 2024
            </div>
        </>
    )
}

export default Todolist
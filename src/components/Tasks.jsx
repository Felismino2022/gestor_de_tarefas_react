import Task from "./Task"
import React from "react"

const Tasks =({tasks, handleTaskClick, handleTaskDeletion})=>{

    return(
        <>
        {
            tasks.map((task, index) => 
            <Task key={index} task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} /> )
        }
        </>
    )
}
export default Tasks
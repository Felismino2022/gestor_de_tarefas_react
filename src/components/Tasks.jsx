import Task from "./Task"
import React from "react"

const Tasks =({tasks, handleTaskClick})=>{

    return(
        <>
        {
            tasks.map((task, index) => 
            <Task key={index} task={task} handleTaskClick={handleTaskClick}/> )
        }
        </>
    )
}
export default Tasks
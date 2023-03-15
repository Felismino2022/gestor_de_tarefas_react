import './Task.css'
import React from 'react'
import {CgInfo, CgClose} from 'react-icons/cg'

const Task = ({task, handleTaskClick}) =>{

    return(
        <div className='task_container' 
        style={task.completed ? {borderLeft : "6px solid chartreuse"} : {}} >

            <div className='task_title' onClick={() =>{handleTaskClick(task.id)}}>
                {task.title}
            </div> 

            <div className='buttons_container'>
                <button className='remove_task_button'>
                    <CgClose/>
                </button>
                <button className='see_task_details_button'>
                    <CgInfo/>
                </button>
                
            </div>
        </div>
    )
}

export default Task
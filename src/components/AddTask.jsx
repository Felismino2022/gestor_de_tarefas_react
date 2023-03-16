import { useState } from 'react'
import React from 'react'
import './AddTask.css'
import './Button'
import Button from './Button'

const AddTask = ({handleTaskAddition}) =>{

    const [inputData, setInputData] = useState('')
    
    

    const handleAddTaskClick = () =>{
        if(!inputData){
            //quando o utilizador não digita nada
            return false
        }
        handleTaskAddition(inputData)
        setInputData("")
    }

    const hlandleInputChage = (e) =>{
        setInputData(e.target.value)
    }

    return(
        <div className="add_task_container">
            <input className='add_task_input' type="text" 
            onChange={hlandleInputChage} value={inputData} />
            <div className='add_task_button_container'>
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    )
}
export default AddTask
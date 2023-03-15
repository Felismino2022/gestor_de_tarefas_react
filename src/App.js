import './App.css'
import {useState} from 'react'
import React  from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {v4 as uuidv4} from 'uuid'

const App = ()=> { 

  const [tasks, setTasks] = useState([

    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livro',
      completed: true,
    },
  ])
  


  const handleTaskClick = (taskId) =>{
    
     const newTasks = tasks.map((task) =>{
      if(task.id === taskId) return { ... task, completed: !task.completed}

      return task
    })
     setTasks(newTasks)
  }
 
  const handleTaskAddition = (taskTitle) =>{
    const newTasks = [
      ... tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ]

    setTasks(newTasks)

  }
  return(
    <div className='container'>
      <h1 className='titulo'>Minhas Tarefas</h1> 

      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
    </div>
  )
}

export default App



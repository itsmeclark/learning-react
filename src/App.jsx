import React, {useState} from "react"


function App() {

  const [tasks, setTask] = useState(["eat", "shower", 'walk dog']);
  const [newTask, setNewTask] = useState('')

  function handleInputChange(event){
    setNewTask(event.target.value)
  }

  function addTask(){
    if(newTask.trim() !== ''){
        setTask(t => [...t, newTask])
        setNewTask("")
    }
    
  }

  function deleteTask(index){
    setTask(tasks.filter((_, i)=>
      i !== index))
  }

  function moveTaskUp(index){

    if(index > 0){
      const updateTask = [...tasks];
      console.log(updateTask);
      [updateTask[index], updateTask[index - 1]] = [updateTask[index-1], updateTask[index]];
      console.log(updateTask);
      setTask(updateTask);
    }
   
  }
  function moveTaskDown(index){
    if(index != tasks.length-1){
      const updateTask = [...tasks];
      console.log(updateTask);
      [updateTask[index], updateTask[index + 1]] = [updateTask[index+1], updateTask[index]];
      console.log(updateTask);
      setTask(updateTask);
    }
  }

  return (
    <>
        <div className="to-do-list">

          <h1>TO DO LIST</h1>

          <div>
            <input type="text" name="" id="" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add</button>
          </div>

          <ol>
            {tasks.map((element, index)=>
              <li key={index}>
                <span className="text">{element}</span>

                <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>

                <button className="move-button" onClick={()=>moveTaskUp(index)}>👆🏻</button>

                <button className="move-button" onClick={()=>moveTaskDown(index)}>👇🏻</button>
              </li>
            )}
          </ol>
        </div>
    </>
  )
}

export default App

import React from 'react'
import './task.css';

function Task({task, dlt}) {

    const [complete, setComplete] = React.useState(false)
    const changeCheck = (e) => {
        setComplete(e.target.checked)
    }

  return (
    <div>
        <label className={complete ? 'complete' : ''}>{task}</label>
        <input onClick={changeCheck} type="checkbox" id="" /><br />
        <button onClick={()=>dlt(task)}>Eliminar</button>
        <br />
    </div>
  )
}

export default Task
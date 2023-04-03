import {useState} from 'react'
import ListTask from './components/ListTask'


const initial = {
  task: ''
}
function App() {

  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState(initial)

  const newTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, task])
  }

  const deleteTask = (t) => {
    const result = tasks.filter((e)=>e.task !== t)
    setTasks(result);
  }

  const handleChange = ({target: {value, name}}) => {
    setTask({...task, [name]: value})
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <form onSubmit={newTask}>
        <label>Nueva tarea</label>
        <input type="text" name='task' onChange={handleChange} placeholder='Tarea' />
        <br />
        <button>Agregar</button>
      </form>
      {tasks.length ? <ListTask data={tasks} dlt={deleteTask} /> : <h1>Sin tareas agregadas</h1> }
    </div>
  )
}

export default App

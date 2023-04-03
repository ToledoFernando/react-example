import {useState} from 'react'

function ListTask({data, dlt}){
    console.log(data)

    return <div>
        {data.map((e, index)=> <div key={index}>
            <h3>{e.task}</h3>
            <button onClick={()=>dlt(e.task)}>Borrar</button>
        </div> )}
    </div>
}

export default ListTask;
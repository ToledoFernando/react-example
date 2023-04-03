import {useState} from 'react'
import Task from './Task';

function ListTask({data, dlt}){

    return <div>
        {data.map((e, index)=> <Task task={e.task} dlt={dlt} key={index} /> )}
    </div>
}

export default ListTask;
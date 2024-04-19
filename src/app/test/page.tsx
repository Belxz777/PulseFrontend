'use client'
import GetTaskID from '@/components/server/GetTaskById'
import React, { useState } from 'react'

type Props = {}

const page = (props: Props) => {
const [inpValue, setinpValue] = useState('')
const [tasksData,setTasksData] = useState<any>(null)
const getAll  = async() =>{
try {
    const response = await GetTaskID(Number(inpValue));
    console.log(response)
    setTasksData(response)
  } catch (error) {
    alert(error);
  }
}
  return (
    <section>
        <input value={inpValue} onChange={(e)=>{
            setinpValue(e.target.value)
        }}></input>
        <button onClick={getAll} >Найти</button>
        {
            tasksData ?
            <div>
{Array.isArray(tasksData) ? tasksData.map((task)=>
<h1 key={task.id} className=' text-blue-800 hover:text-red-500'>{task.name}</h1>
)
:
<h1>
{tasksData.name}
</h1> 
}
            </div>
            :
            <p>Ты еще не запрашивал данные</p>
        }
    </section>
  )
}

export default page
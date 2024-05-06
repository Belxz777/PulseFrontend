'use client'
import { checkCookie } from '@/components/server/CheckCookie'
import { getAllProjectTasks, getProjectTitle, getUserByPrefixSurname } from '@/components/server/getUserProjects'
import { useRouter } from 'next/navigation';
import Router from 'next/router';
import React, { useEffect, useState } from 'react'
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import authUser from '@/components/server/Auth'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SearchUser from '@/components/assembled/searchUser'
import { createTask } from '@/components/server/Create'
import { Select } from '@/components/ui/select'
import SelectStage from '@/components/assembled/SelectStage'
import AddTaskDialog from './AddTaskDialog';
import ProjectData from './ProjectData';
import { Button } from '../ui/button';
import ChangeTask from './changeTask';
import { deleteTask } from '../server/deleteObj';
type Props = {
projectId: number
}

const Tasks = (props: Props) => {
  const windowType = typeof window !== 'undefined'

  const userId: userData = windowType ? JSON.parse(localStorage?.getItem('userData') || '{}') : null
const router = useRouter()
const [update, setupdate] = useState(true)
setTimeout(() => {
setupdate(!update)
},5000)
    const [tasks, setTasks] = useState<task | Array<task>>([])
    const [name,setName] = useState('')
    const [membersIds, setmembersIds] = useState<Array<number>>([userId?.id])
    const [users, setusers] = useState<Array<userData> | userData>([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
      const getNames = async() =>{
          const users = await getUserByPrefixSurname(name)
     setusers(users)
      }
      if(name.length < 1){
return
      }
      setTimeout(()=>{
          getNames()
      },1000)
    
  },[name])
    useEffect(() => {
        const fetchData = async () => {
            const isToken = await checkCookie()
            if (!isToken) {
                router.push('/login')
                return
            }
            try {
                const projectTitle = await getProjectTitle(props.projectId)
               
                const response = await getAllProjectTasks(props.projectId)
                setTasks(response)
            }
            catch (error) {
                throw new Error('error happened while authenticating user')
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [update]);
    const tasksByStage: { [stage: string]: task[] } = {};
    if(Array.isArray(tasks)){
    tasks.forEach(task => {
      if (!tasksByStage[task.stageAt]) {
        tasksByStage[task.stageAt] = [];
      }
      tasksByStage[task.stageAt].push(task);
    });
}
else {
  tasksByStage[tasks.stageAt] = [tasks]
}
const handleSelectUser = (user: userData) => {
  setmembersIds((prevIds) => [...prevIds, user.id])
  }
  const [projectName, setprojectName] = useState('')
  return (
<>
{
    tasks ?
<section className="flex-1 p-4 w-full h-full">
<div className="flex justify-between mb-4">
  <h1 className="text-2xl font-bold">Доска</h1>
  <ProjectData projectId={props.projectId} projectName={projectName}/>        
</div>
<div className="grid grid-cols-3 gap-2">
{
Object.keys(tasksByStage).map(stage => (
<div key={stage}  className=' w-full rounded-lg bg-white p-4 shadow-lg flex flex-col items-center overflow-hidden object-contain'>
<h1>{stage}</h1>
<ScrollArea className="h-[500px] space-x-4 space-y-10 w-full">
{tasksByStage[stage].map(task => (

  <AlertDialog key={task.id} >
    <div className=' bg-slate-200 rounded-xl '>
  <h1>Задача: <i>{task.name}</i></h1>
  <h1>Описание: {task.description}</h1>
  <h1>Время: <i>{task.hoursToAccomplish} часов</i></h1>
  <Label htmlFor='priority'>Приоритет</Label>
  <Input type='range' value={task.priority} maxLength={10} id="priority" />
  <AlertDialogTrigger className=" pt-0 p-0 m-0 flex  justify-end">
    <Button  title='Изменить'  >Изменить</Button>
  </AlertDialogTrigger>
  <Button title='Удалить' className='ml-2' onClick={() => {
const sure = confirm('Вы уверены что хотите удалить задачу ?');
if (sure) {
deleteTask(task.id);
}
}}>Удалить</Button>



 
  </div>
  <ChangeTask task={task}/></AlertDialog>
))}
</ScrollArea>

</div>

))}
</div>
<AddTaskDialog project={props.projectId}/>
</section>
:
null
} 
</>
) }

export default Tasks
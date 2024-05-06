import React, { useState } from 'react'
import Router from 'next/router';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    } from "@/components/ui/select"
import { CgAdd } from 'react-icons/cg'
import { Input } from '../ui/input'
import SelectStage from './SelectStage'
import SearchUser from './searchUser'
import { createTask } from '../server/Create'
import { useRouter } from 'next/navigation'
type Props = {
    project: number
}

const AddTaskDialog = (props: Props) => {
  const router  = useRouter()
    const [isAdded, setisAdded] = useState(false)
    const [newTask,setNewTask] = useState<addTask>({
        project_id:0,
        name:'',
  description:'',
  stageAt:"",
hoursToAccomplish:0,
priority:0,
workers:[]
})
const stage = ''
const addTask = async () => {
newTask.project_id = props.project
if (newTask.stageAt == '') {
throw new Error("")
}
await createTask(newTask)
setisAdded(true)

}
  return (
<AlertDialog  >
<AlertDialogTrigger className='flex  flex-col justify-end float-right text-3xl'><CgAdd  scale={100}/>  Добавить </AlertDialogTrigger>
<AlertDialogContent className='bg-blue-100'>
<AlertDialogHeader>
<AlertDialogTitle className=''>Создать Задачу</AlertDialogTitle>
<AlertDialogDescription>
<Input className="w-full" placeholder="Название задачи" value={newTask.name} onChange={(e)=>setNewTask({...newTask,name:e.target.value})} />
<Input className="w-full" placeholder="Описание задачи" value={newTask.description} onChange={(e)=>setNewTask({...newTask,description:e.target.value})} />
<Input className="w-full" placeholder="Время на выполнение" type='number' value={newTask.hoursToAccomplish} onChange={(e)=>setNewTask({...newTask,hoursToAccomplish:Number(e.target.value)})} />
<Input className="w-full" placeholder="Важность" type='number' maxLength={10}  value={newTask.priority} onChange={(e)=>setNewTask({...newTask,priority:Number(e.target.value)})} />
<Select onValueChange={(value) => { setNewTask({...newTask,stageAt:value})}} value={newTask.stageAt} >
<h1>{newTask.stageAt}</h1>
<SelectTrigger>
<SelectValue placeholder="Стадия задачи" />
</SelectTrigger>
<SelectContent className=' bg-violet-300'>
<SelectItem value="Готово">Готово</SelectItem>
<SelectItem value="В процессе">В процессе</SelectItem>
<SelectItem value="В обсуждении">В обсуждении</SelectItem>
</SelectContent>

</Select>
<SearchUser memberIds={newTask.workers}/>
</AlertDialogDescription>
</AlertDialogHeader>
<AlertDialogFooter>
<AlertDialogCancel>Отмена</AlertDialogCancel>
<AlertDialogAction onClick={()=>addTask()}>Создать</AlertDialogAction>
{
  isAdded ?
  <h1>Задача добавлена</h1>
  :
  null
}
</AlertDialogFooter>
</AlertDialogContent>
</AlertDialog>
  )
}

export default AddTaskDialog
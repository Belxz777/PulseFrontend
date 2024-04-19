'use server'
import { host } from "./types";

async  function GetTaskID(id:number){
    const res = await fetch(`${host}/api/task_for_project/${id}`,{
    });
    console.log(res.status);
    if(!res.ok){
        throw new Error('ошибка при запросе задач проекта')

    }
    return res.json()
}
export default GetTaskID
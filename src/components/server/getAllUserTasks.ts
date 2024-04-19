'use server'
import { host } from "./types";

async  function GetAllUserTasks(id:number){
    const res = await fetch(`${host}/api/all_user_task/${id}`,{
    });
    console.log(res.status);
    if(!res.ok){
        throw new Error('ошибка при запросе задач проекта')

    }
    return res.json()
}
export default GetAllUserTasks
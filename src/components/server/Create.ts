"use server "

import { host } from "./types";




async function createProject(name:string,description:string,member:Array<number>) {
    const response = await fetch(`${host}project/0`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            description: description,
            members: member
        })
    });
console.log(response)
    const responseData = await response.json();

    return responseData.id

    
}
async function createTask(data:addTask): Promise<any> {
 
    const response = await fetch(`${host}task/0`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           project_id: data.project_id,
             name: data.name,
            description: data.description,
            hoursToAccomplish: data.hoursToAccomplish,
            stageAt:data.stageAt,
             priority: data.priority,
            workers: data.workers
        })
    });
console.log(response.status , "Статус создания таски")
    const responseData = await response.json();

    return responseData

}
export {createProject,createTask}



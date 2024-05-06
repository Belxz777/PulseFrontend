'use server'
import { cookies } from "next/headers";
import { host } from "./types";
import { string } from "zod";

async function getUserProjects(id: number): Promise<Array<project> | project>  {
    const cookieStore = cookies();
    const jwt = cookieStore.get('jwt')?.value
    if (!jwt) {
        throw new Error('No token provided')
    }
    console.log(host, id)
    if (!id) {
        throw new Error('No project id provided')
    }
    const res = await fetch(`${host}all_user_projects/${id}`);
    if (!res.ok) {
        console.log(res.status)
        throw new Error('Failed to fetch data')
    }
    const receiveddata = await res.json();
    return receiveddata
}

async function getUserTask(id:number):Promise<Array<task> | task> {
    const cookieStore = cookies();
    const jwt = cookieStore.get('jwt')?.value
    if(!jwt){
        throw new Error('No token provided')
    }
    console.log(host,id)
    if(!id ){
        throw new Error('No task id provided')
    }
    const res = await fetch(`${host}all_user_task/${id}`);
    if(!res.ok) {
        console.log(res.status)
        throw new Error('Failed to fetch data')
    }
    const receiveddata = await res.json();
    return receiveddata
}
async function getAllProjectTasks(id:number):Promise<Array<task> | task> {
    const cookieStore = cookies();
    const jwt = cookieStore.get('jwt')?.value
    if(!jwt){
        throw new Error('No token provided')
    }
    if(!id ){
        throw new Error('No project id provided')
    }
    const res = await fetch(`${host}task_for_project/${id}`,{ next: { revalidate: 3600 } });
    if(!res.ok) {
        console.log(res.status)
        throw new Error('Failed to fetch data')
    }
    const receiveddata = await res.json();
    return receiveddata
}
 async function getUserName(id:number):Promise<string>{
    const cookieStore = cookies();
    const jwt = cookieStore.get('jwt')?.value
    if(!jwt){
        throw new Error('No token provided')
    }
    if(!id ){
        throw new Error('No user id provided')
    }
    const res = await fetch(`${host}user/${id}`);
    if(!res.ok) {
        console.log(res.status)
        throw new Error('Failed to fetch data')

 }
 const receiveddata:userData = await res.json();
 return receiveddata.first_name +' ' + receiveddata.last_name;
}
async function getUserByPrefixSurname(surname:string):Promise<any>{
const cookieStore = cookies();
    const jwt = cookieStore.get('jwt')?.value
    if(!jwt){
        throw new Error('No token provided')
    }
    if(!surname ){
        throw new Error('No user id provided')
    }
    const res = await fetch(`${host}userbyName/${surname}`);
    if(!res.ok) {
        console.log(res.status)
        throw new Error('Failed to fetch data')

 }
 const receiveddata:userData = await res.json();

 return receiveddata;
}
async function getProjectTitle(id:number):Promise<project>{
    const cookieStore = cookies();
        const jwt = cookieStore.get('jwt')?.value
        if(!jwt){
            throw new Error('No token provided')
        }
        if(!id ){
            throw new Error('No user id provided')
        }
        const res = await fetch(`${host}project/${id}`);
        if(!res.ok) {
            console.log(res.status)
            throw new Error('Failed to fetch data')
    
     }
     const receiveddata:project= await res.json();
    
     return receiveddata;
    }
export  { getUserProjects,getUserTask,getAllProjectTasks,getUserName,getUserByPrefixSurname,getProjectTitle};
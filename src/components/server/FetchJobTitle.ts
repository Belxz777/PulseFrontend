'use server'
import { cookies } from "next/headers";
import { host } from "./types";

async function fetchTitle(id:number):Promise<string> {
    const cookieStore = cookies();
    const jwt = cookieStore.get('jwt')?.value
    console.log(jwt);
    if(!jwt){
        throw new Error('No token provided')
    }
    console.log(host,id)
    if(!id ){
        return "no id provided"
    }
    const res = await fetch(`${host}job_title/${id}`);
    if(!res.ok) {
        console.log(res.status)
        throw new Error('Failed to fetch data')

    }
    const receiveddata = await res.json();
    return receiveddata.name
}
async function fetchAllTitles():Promise<Array<jobTitle> |jobTitle> {
    const res = await fetch(`${host}all_job_titles`,);
    if(!res.ok) {
        console.log(res.status)
        throw new Error('Failed to fetch data')

    }
    const receiveddata = await res.json();
    return receiveddata
}

export  {fetchTitle,fetchAllTitles};
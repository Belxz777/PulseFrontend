'use server'
import { cookies } from "next/headers";
import { host } from "./types";
import { error } from "console";

async function fetchDepartmentMembers(id:number):Promise<userData[]> {
    //const cookieStore = cookies();
    // const jwt = cookieStore.get('jwt')?.value
    // console.log(jwt);
    // if(!jwt){
    //     throw new Error('No token provided')
    // }
    console.log(host,id)
    if(!id ){
       throw new Error("") 
    }
    const res = await fetch(`${host}/api/get_all_department_members/${id}`);
    if(!res.ok) {
        console.log(res.status)
        throw new Error('Failed to fetch data')

    }
    const receiveddata = await res.json();
    return receiveddata
}
export {fetchDepartmentMembers}
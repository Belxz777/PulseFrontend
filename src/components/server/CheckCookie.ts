"use server"
import { cookies } from "next/headers";

export  async function checkCookie():Promise<boolean>{
    const cookiesStore = cookies()
    const jwt = cookiesStore.get('jwt')?.value
    if(!jwt){
        return false
    }
    return true

}
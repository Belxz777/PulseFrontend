"use server"
import { cookies} from 'next/headers';
import { host } from './types';

 interface LoginData {
    login: string
    password: string
}
interface OutPut{
message: string,
token: string
}
   async function sendUserLoginData(data: LoginData): Promise<OutPut> {
console.log(host)
    const res = await fetch(`${host}users/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const receiveddata: OutPut = await res.json();

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Ошибка при входе попробуйте еще раз'); 
    }

    const cookiesApi = cookies()
    cookiesApi.set('jwt', receiveddata.token,{
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        httpOnly: true,
        secure: true,
    })
    console.log(receiveddata)
    return receiveddata;
}

export default sendUserLoginData;
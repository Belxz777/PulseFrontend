"use server"
import { cookies } from 'next/headers';
import { host } from './types';
async function authUser(): Promise<OutCome > {
    const cookieStore = cookies();
    const jwt = cookieStore.get('jwt')?.value
    if(!jwt){
        throw new Error('No token provided')
    }
    const res = await fetch(`${host}users/auth`,{
        credentials:'include',
        headers:{
            Cookie: `jwt=${jwt}`
        }
    });
    console.log(res.status);


        /* headers: {
          'Cookie': 'jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjozNiwiZXhwIjoxNzExNzMwMDU2LCJpYXQiOjE3MTA4NjYwNTZ9.-7wepW1XWmXZTW1hmc7J7awbGR6bYDy1odoQGcB8YnY'
        }*/
        return res.json()
}
export default authUser;
"use client"
import React, { useEffect, useState } from 'react'

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {  z } from 'zod'
import registerUser from '@/components/server/Register'
import { fetchAllTitles } from '@/components/server/FetchJobTitle'
import { checkCookie } from '@/components/server/CheckCookie'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
function Registration() {
 const schematwo = z.object({
    login: z.string().min(6),
    password: z.string().min(6),
    first_name:z.string(),
    last_name: z.string(),
    father_name:z.string(),
    job_title_id:z.number(),
    age:z.number(),
    avatar:z.string(),
})
const [data, setdata] = useState({
  login:"",
  password:"",
  first_name:"",
  last_name: "",
  father_name:"",
  job_title_id:0,
  age:0,
  avatar:"",
  
}
)
const router  = useRouter()
const [job_title, setjob_title] = useState<Array<jobTitle> | jobTitle>([])
async function createUser(){
    const result = schematwo.safeParse(data)
    if (!result.success) {
      throw new Error(result.error.message)

    }
    try {
      const send = await registerUser(data)
      router.push('/login')
    } catch (error) {
      throw new Error('Failed to register user')
    }

  }
console.log(data)
  useEffect(() => {
    const fetchData = async () => {
      const isToken =  await checkCookie()
if(isToken){
router.push('/profile')
return    }

      const response = await fetchAllTitles();
      setjob_title(response);
    
    };
    fetchData();

  }, []);
  return (
    <div className="px-4 md:px-6 lg:px-8 py-6 space-y-6">
      <div className="flex items-center space-x-4">
        <Button className="rounded-full">
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="text-2xl font-bold tracking-tighter">Регистрация</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="login"  
        >Логин</Label>
            <Input id="login" placeholder="Логин" required  value={data.login}  onChange={(e) => setdata({...data, login: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <Input id="password" placeholder="Пароль" required  value={data.password} onChange={(e)=>setdata({...data, password: e.target.value})} type="password"/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="first-name">Имя</Label>
            <Input id="first-name" placeholder="Имя" required  value={data.first_name} onChange={(e) => setdata({...data, first_name: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name" >Фамилия</Label>
            <Input id="last-name" placeholder="Фамилия" required value={data.last_name} onChange={(e) => setdata({...data, last_name: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="middle-name">Отчество</Label>
            <Input id="middle-name" placeholder="Отчество" value={data.father_name} onChange ={(e) => setdata({...data, father_name: e.target.value})}/>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
          <p>Возраст</p>
            <Input type='number' id='age' min='18' max='70' required className=' space-x-2' value={data.age} onChange={(e) => setdata({ ...data, age: parseInt(e.target.value) })} />

          </div>
          <div className="border-dashed border-2 border-gray-300 dark:border-gray-700 rounded-lg p-4 flex items-center justify-center w-full">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                alt="Avatar placeholder"
                height="64"
                src={data.avatar}
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
            </div>
            <div className="ml-4 text-sm">
              <p className="font-semibold">Перетащите файл сюда</p>
              <p className="text-gray-500 dark:text-gray-400">
                или
                <Label  className="cursor-pointer underline ml-1" htmlFor="file">
                  выберите файл
                </Label>
              </p>
              <Input className="hidden" id="file" type="file" onChange={(e) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  setdata({ ...data, avatar: URL.createObjectURL(files[0]) });
                }
              }} />


            </div>
          </div>
          <div className="space-y-2  "> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <h1>{data.job_title_id}</h1> */}
            <select  value={data.job_title_id} onChange={(e) => setdata({...data, job_title_id: parseInt(e.target.value)})}>
{
Array.isArray(job_title) ?
  
job_title.map((item) => 
  <option key={item.id} value={item.id}> {item.name}</option>
)
  :
  <option  value={job_title.id} > {job_title.name}</option>
}
 </select>
            </div>
          </div>
        </div>
      </div>
      <Button className="w-full" onClick={createUser} >Зарегистрироваться</Button>
    </div>
  )
}
export default Registration

'use client'
import React,{useState,useEffect,useRef} from 'react'
import { useRouter } from 'next/navigation'
import authUser from '@/components/server/Auth';
import { getAllQuests } from '@/components/server/getAllQuests'
import { fetchDepartmentMembers } from '@/components/server/Departments'
import { deleteUser } from '@/components/server/deleteObj';
import { Button } from '@/components/ui/button';


type Props = {}

  function Karta ({}: Props) {
    const [users, setusers] = useState<userData[] | null>(null)
  useEffect( () => {


const fetchData = async () => {
const response  =  await fetchDepartmentMembers(1)

setusers(response)
}
    fetchData()
        },[])
      const router = useRouter()
    const height = window.innerHeight - 100
    const width = window.innerWidth
  
  return (

    <main className='  '>
<div className='grid grid-cols-4 w-196 '>
            <div>
              <button className='h-16 w-16 rounded-full'/>
            </div>
            <div className='p-4 w-120'>  
              <h1>Fynjyjd fynjy fynjyjdbx  </h1>
              <h1>Должность: gjdfh</h1>
              <h1>Проекты: двылтлды</h1>
            </div>
        
          <div>
          <Button className="w-full sm:w-auto" onClick={() => {
const sure = confirm('Вы уверены что хотите удалить работника?');
if (sure) {
deleteUser(null);
}}}>Удалить</Button>
          </div>

          <div>
          <Button className="w-full sm:w-auto" onClick={() => {
const sure = confirm('Вы уверены что хотите удалить работника?');
if (sure) {
deleteUser(null);
}}}>Изменить</Button>
          </div>
</div>

<button className=" bg-button-base hover:bg-hint-base text-button-base font-bold py-2 px-4 rounded-full text-xl flex" onClick={()=> router.push(`/`)}>
</button>
    <div className='  w-full '>
      {
        users ?
       users.map((user)=>
        <section>

          <div className='grid grid-cols-2 w-96 '>
            <div>
              <img src={user.avatar} className='h-16 w-16 rounded-full'/>
            </div>
            <div className='p-4 w-96'>  
              <h1>{user.first_name} {user.father_name} {user.last_name}  </h1>
              <h1>Должность: {user.position}</h1>
              <h1>Проекты: {user.job_title_id}</h1>
            </div>
          </div>
          <div>
          <Button className="w-full sm:w-auto" onClick={() => {
const sure = confirm('Вы уверены что хотите удалить работника?');
if (sure) {
deleteUser(user.id);
}}}>Удалить</Button>
          </div>
      

        </section>
      )
        :
        null
      }
</div>
</main>
  )
}
export default Karta
"use client"
import authUser from '@/components/server/Auth';
import GetAllUserTasks from '@/components/server/getAllUserTasks';
import React, { useState } from 'react';


export default function AuthPage() {
  const [userData, setUserData] = useState<any>(null);
  const [tasksData,setTasksData] = useState<any>(null)
  async function handleAuthUser() {
    try {
      const response = await authUser();
      console.log(response)
      setUserData(response.userData);
    } catch (error) {
      alert(error);
    }
  }
  async function takeAllUserTasks() {
    try {
      const response = await GetAllUserTasks(userData.id);
      console.log(response)
      setTasksData(response)
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <button onClick={handleAuthUser}>Authenticate User</button>
      {userData && (
        <>
        <div>
          <p>Age: {userData.age}</p>
          <p>First Name: {userData.first_name}</p>
          <p>Last Name: {userData.last_name}</p>
          <p>Father Name: {userData.father_name}</p>
        </div>
        <button onClick={takeAllUserTasks}>
        Показать все таски
        </button>
        <div>
        {
            tasksData ?
            <div>
{Array.isArray(tasksData) ? tasksData.map((task)=>
<h1 key={task.id} className=' text-blue-800 hover:text-red-500'>{task.name}</h1>
)
:
<h1>
{tasksData.name}
</h1> 
}
            </div>
            :
            <p>Ты еще не запрашивал данные</p>
        }

          </div>
          </>
      )}
    </div>
  );
}


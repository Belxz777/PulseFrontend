'use client'
import React from 'react'
import { Button } from '@/components/ui/button';
import Navigation from '@/components/buildIn/Navigation';
import UserProfile from '@/components/buildIn/UserProfile';
import DpMembers from '@/components/buildIn/DpMembers';
import ProjectsCard from '@/components/buildIn/ProjectsCard';
import { useProjectData } from '@/hooks/useProjectData';
import Loading from '@/components/buildIn/Loading';
const Profile = () => {
  const { title, departmentMembers, userData, status, errorState, getUserProjectsClient, projects, isMounted } = useProjectData()
  // todo добавить информацию о количестве рабочих часов сотрудника вобщем его данные загруженности 
  //и его сделанные таски
  return (
    <>
      <Navigation isBoss={false} idOfDep={status.deparmentId} isImage={false}   />
      {
        !isMounted && <Loading />
      }
      <main className="  bg-main-base min-h-screen text-white ">
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row">
          {
            userData ?
              <>
                <UserProfile
                  userData={userData} title={title} />
                <section className="flex flex-col flex-grow  p-8 space-y-6">
                  {
                    departmentMembers && <DpMembers departmentMembers={departmentMembers} />
                  }
                  {
                    projects ?
                      <ProjectsCard projects={projects} />
                      :
                      <>
                        <p> У тебя нет проектов</p>
                        <Button onClick={()=>getUserProjectsClient(userData.id)} className='flex justify-center'>Обновить</Button>

                      </>
                  }
                </section>
              </>
              :
              null
          }
        </div>
      </main>
    </>
  )
}

export default Profile
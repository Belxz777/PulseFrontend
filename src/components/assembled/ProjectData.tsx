import React, { useEffect, useState } from 'react'
import { getAllProjectTasks, getProjectTitle } from '../server/getUserProjects';
import { checkCookie } from '../server/CheckCookie';
import { useRouter } from 'next/navigation';
import { beautifyArray, toNames } from '../server/other/fromIdsToNames';
type Props = {
    projectId: number,
    projectName: string
}

const ProjectData = (props: Props) => {
    const [projectData, setprojectData] = useState<project >({
        id: 0,
        name:props.projectName ,
        description: "",
        members:[],
        created_at: ""
    })
    const [namesStr, setnames] = useState<string>("")
    const router  = useRouter()
    useEffect(() => {
        const fetchData = async () => {
            const isToken = await checkCookie()
            if (!isToken) {
                router.push('/login')
                return
            }
            try {
                const projectTitle:project= await getProjectTitle(props.projectId)
               setprojectData(projectTitle)
       const namesOf =   toNames(projectTitle.members)
       const names = await toNames(projectTitle.members);
       const beautifulNames = beautifyArray(names); 
       setnames(beautifulNames)

    }
            catch (error) {
                throw new Error('error happened while authenticating user')
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <>
{
    projectData ?
    <div>
       <p>{projectData.name}</p> 
        Дата создания: {projectData.created_at}
        <div className='flex '>
        Участники :  {namesStr}
        </div>
    </div>
    :
    null
}
</>
  )
}

export default ProjectData
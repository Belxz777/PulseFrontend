
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { checkCookie } from '../server/CheckCookie';
import authUser from '../server/Auth';
import Image from 'next/image';
import Link from 'next/link';
type Props = {}

const Aside = (props: Props) => {
    const router   = useRouter()
    const [error,setError] = useState({
      status:false,
      text:"",
    })
    const [userData, setUserData] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            const isToken = await checkCookie()
            if (!isToken) {
                router.push('/login')
                return
            }
            try {
              const responseUser= await authUser();
              setUserData(responseUser.userData);
            }
            catch (error) {
              
                setError({status:true, text:"Ошибка аутентификации пользователя"})
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <aside className=" w-1/12 flex flex-col items-center bottom-0 bg-white">
      {
        error.status? null : 
    <div> 
    <Link href={`/profile`}>
        <Image
       width="0"
       height="0"
       sizes="100vw"
       className="w-auto h-auto"
        src={userData ? userData.avatar : "/addUser.png"}   
        loading="lazy"
        onError={(e)=>{
          alert('Не удалость загрузить аватарку')
        }}
        alt="avatar"
        
        />
        </Link>
        {/* <div className='  bg-white'>
        <h2>{userData ?  <h2>{userData. first_name }  {userData. last_name } </h2> :null}</h2>
<h2>{localStorage.getItem('jobTitle')}</h2>
        </div> */}
</div>
}
    </aside>
  )
}

export default Aside
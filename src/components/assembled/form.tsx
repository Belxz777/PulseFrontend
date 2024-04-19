'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {z} from 'zod'
import sendUserLoginData from '../server/Login'
import { useRouter } from 'next/navigation'
type Props = {}

function Form({ }: Props) {
    const router = useRouter()

    const schema = z.object({
        login: z.string().min(6),
        password: z.string().min(1)
    })

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState(false)

    const sendData = async () => {
        const data = {
            login: login || '',
            password: password || ''
        }

        const valid = schema.safeParse(data)

        if (valid.success) {
            const requst = await sendUserLoginData(data)
            router.push('/workspace')
        }
    }

    return (
        <div className='flex flex-col'>
            <Input
                className="mt-4"
                placeholder="Введите свой логин"
                value={login}
                onChange={(e) => { setLogin(e.target.value) }}
            />

            <Input
                className="mt-4"
                placeholder="Введите свой пароль"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
            />

            <Button
                className="bg-orange-600 mt-4"
                title=""
                onClick={sendData}
            >
                Войти
            </Button>
            {
                error ? 
                <h1>Error occure</h1>
                :
                null
            }
            
        </div>
    )
}


export default Form
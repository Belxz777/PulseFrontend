'use client'
import React, { useRef, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {z} from 'zod'
import sendUserLoginData from '../server/Login'
import { useRouter } from 'next/navigation'
type Props = {}

function Form({ }: Props) {
    const router = useRouter()
    const buttonRef = useRef<HTMLButtonElement>(null)
    const schema = z.object({
        login: z.string().min(6),
        password: z.string().min(1)
    })

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState(false)
    const [errorData, setErrorData] = useState<string>('')
    const sendData = async () => {
        const data = {
            login: login || '',
            password: password || ''
        }

        const result = schema.safeParse(data)
        if (!result.success) {
            setErrorData(result.error.issues[0].message)
            console.error(result.error.message)
        }
        const resultData = await sendUserLoginData(data)
        if (!resultData) {
            setError(true)
            throw new Error("Failed to login")
        }
        router.push('/profile')

            localStorage.setItem('userData', JSON.stringify(resultData))
        return resultData

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
                type='password'
                onChange={(e) => { setPassword(e.target.value) }}
            />

            <Button
                className="bg-orange-600 mt-4  hover:bg-orange-200"
                title=""
                onAuxClick={
                    () => {
                        buttonRef.current?.click()
                    }
                }
                onClick={sendData}
            >
                Войти
            </Button>
            {
            errorData ? <h1 className=' text-red-600'>{errorData}</h1> : null
            }

        </div>
    )
}


export default Form
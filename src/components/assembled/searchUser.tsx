'use client'
import React, { use, useEffect, useState } from 'react'
import { getUserByPrefixSurname, getUserName } from '../server/getUserProjects';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

type Props = {
    memberIds:number[]
}
interface user {
    id: number;
    name:string
}
function SearchUser(props:Props) {
const userId: userData = JSON.parse(localStorage?.getItem('userData') || '{}');
const [membersList, setMembersList] = useState<Array<user>>([{
id: userId.id,
name: userId.first_name + ' ' + userId.last_name 
}])
const [name, setName] = useState('')
const total = []
const [users, setusers] = useState<Array<userData> | userData>([])
useEffect(() => {
const getNames = async () => {
const users = await getUserByPrefixSurname(name)
setusers(users)
}
if (name.length < 1) {
return
}
setTimeout(() => {
getNames()
}, 1000)

}, [name])
const getNameById = async (id: number) => {

}
const handleSelectUser = (user: userData) => {
// setproject((prev) => ({
// ...prev, members: [...prev.members, {
// name: user.first_name,
// surname: user.last_name,
// id: user.id
// }]
setMembersList((prevIds) => [...prevIds, {
id: user.id,
name: user.first_name + ' ' + user.last_name
}])
props.memberIds.push(user.id)

}

return (
<div className="space-y-2">
<div className="flex space-x-4">
<div className='flex '>Добавлены :  {membersList.map(user =>
<p key={user.id}>{user.name}</p>
)}</div>
</div>
<Label htmlFor="participants">Поиск </Label>
<Input id='participants' className="" placeholder="Введите Фамилию" value={name} onChange={(e) => setName(e.target.value)} />
<div className=' pt-0 mt-0'>
{Array.isArray(users) ?
users.map((user) => (
<p key={user.id} onClick={() => handleSelectUser(user)} >
{user.first_name} {user.last_name}
</p>
))
:
<p key={users.id}  >
{users.first_name} {users.last_name} <Button onClick={() => handleSelectUser(users)}>Добавить</Button>
</p>
}
</div>
</div>
)
}

export default SearchUser
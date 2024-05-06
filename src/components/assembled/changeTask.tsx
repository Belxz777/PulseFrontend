import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
type Props = {
    task:task
}

const ChangeTask = (props: Props) => {
  return (
<AlertDialogContent className=" bg-fuchsia-500"> 
<AlertDialogHeader className="AlertDialogHeader"><AlertDialogCancel className="AlertDialogCancel">×</AlertDialogCancel><AlertDialogTitle className="label">Задача: <b>{props.task.name}</b></AlertDialogTitle></AlertDialogHeader>
<AlertDialogDescription className="AlertDialogDescription">
Описание: {props.task.description}
</AlertDialogDescription><AlertDialogDescription className="AlertDialogDescription"> Проект: <b>{props.task.project_id}</b>
</AlertDialogDescription><AlertDialogDescription className="AlertDialogDescription"> Время на выполнения: <b>{props.task.hoursToAccomplish}</b></AlertDialogDescription>
  </AlertDialogContent>
  )
}
export default ChangeTask
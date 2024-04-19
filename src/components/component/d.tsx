/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/G5MO5FDMNez
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Cabin } from 'next/font/google'
import { Rethink_Sans } from 'next/font/google'

cabin({
  subsets: ['latin'],
  display: 'swap',
})

rethink_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function d() {
  return (
    <Card>
      <div className="flex space-x-4">
        <CardContent className="w-full max-w-lg space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Добавить проект</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Добавьте свой проект, введите название проекта, описание и выберите участников.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="project-name">Название проекта</Label>
            <Input id="project-name" placeholder="Название проекта" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Описание</Label>
            <Textarea className="min-h-[100px]" id="description" placeholder="Описание" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="participants">Участники</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Выберите участников" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Участник 1</SelectItem>
                <SelectItem value="2">Участник 2</SelectItem>
                <SelectItem value="3">Участник 3</SelectItem>
                <SelectItem value="4">Участник 4</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardContent className="flex-none">
          <Image
            alt="Project image"
            className="aspect-[16/9] rounded-lg object-cover"
            height="90"
          src='/plastic-wallpaper-1600x900.jpg'
            width="160"
          />
        </CardContent>
      </div>
      <CardFooter className="flex justify-end">
        <Button>Создать проект</Button>
      </CardFooter>
    </Card>
  )
}

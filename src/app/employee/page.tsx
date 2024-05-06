import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut} from "@/components/ui/command"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import Link from "next/link"
import { Input } from "@/components/ui/input"


export default function Home() {
  return (
      <div className="all">
        <div className="block1">
          <h1 className="text">Трудозатраты</h1>
          <ul>
            <Link href={"../../../project/"}><li>Статистика по проектам</li></Link>
            <Link href={"../../../employee/"}><li className="li_main">Статистика по сотрудникам</li></Link>
            <Link href={"../../../labor-costs_lid/"}><li>Учет трудозатрат</li></Link>
          </ul>
        </div>

      <div className="col2">
        <div className="block2">


        <Popover>
  <PopoverTrigger className="input"></PopoverTrigger>
  <PopoverContent className="input" ><Command>
  <CommandInput/>
  <CommandList>
  <CommandEmpty>Ничего не найдено</CommandEmpty>
    <CommandGroup heading="Я...">
    <Button className="CommandItem" asChild><Link href={"../../../my-stat/"}><CommandItem>Сотрудник</CommandItem></Link></Button>
    <Button className="CommandItem" asChild><Link href={"../../../project/"}><CommandItem>Руководитель</CommandItem></Link></Button>
    <Button className="CommandItem" asChild><Link href={"../../../.../"}><CommandItem>Администратор</CommandItem></Link></Button>
    </CommandGroup>
    <CommandGroup heading="Страницы">
    <Button className="CommandItem" asChild><Link href={"../../../project/"}><CommandItem>Статистика по проектам</CommandItem></Link></Button>
    <Button className="CommandItem" asChild><Link href={"../../../employee/"}><CommandItem>Статистика по сотрудникам</CommandItem></Link></Button>
    <Button className="CommandItem" asChild><Link href={"../../../labor-costs_lid/"}><CommandItem>Учет трудозатрат</CommandItem></Link></Button>
    </CommandGroup>
    <CommandSeparator />
  </CommandList>
</Command>
</PopoverContent>
</Popover>




        <div className="profil_block">
        <Avatar className="Avatar">
          <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
          <AvatarFallback>II</AvatarFallback>
        </Avatar>
        <div>
        <h2 className="h2">Ишматов Тимофей Ильич</h2>
        <h2 className="h2">Программист</h2>
        </div></div></div>



        <div className="block3">
        
        </div>
        
        </div></div>
  );}

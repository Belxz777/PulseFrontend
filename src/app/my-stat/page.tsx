'use client'
import {AD, ADCancel, ADContent, ADD, ADHeader, ADTitle, ADTrigger} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut} from "@/components/ui/command"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import authUser from "@/components/server/Auth"


export default function Home() {
  const [userData, setUserData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authUser();
        console.log(response);
        setUserData(response.userData);
        /*
        19:36:02.761 | next.js browser	    
  {
    message: 'Ты аутетифицирован',
    token: 
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjozLCJleHAiOjE3MTI5MzU5NjYsImlhdCI6MTcxMjA3MTk2Nn0.WPymFBcXtWWb4LsdtKtalu0Cf6v4FemurDGX6YrE-2g',
    userData: {
      id: 3,
      job_title_id: 6,
      age: 35,
      first_name: 'Степанов',
      last_name: 'Олег',
      father_name: 'Дмитреевич',
      position: 'работник',
      login: 'dmitry321'
    }
  }
        */
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);

  return (



        <div className="profil_block">
          {
            !userData ? 
            <Avatar className="Avatar">
            <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
            <AvatarFallback>II</AvatarFallback>
          </Avatar>
          : 
          null
          }
        <div>
          I
        <h2>{userData ?             <h2>{userData. first_name }  {userData. last_name } </h2> :null}</h2>
        <h2>Программист</h2>
        </div>

        <div className="block3">
        <h1 className="text">Мои задачи:</h1>
          <div className="tasks_block3">


            <div className="to_do">
              <h3>Сделать</h3>
              <ScrollArea className="h-[500px]">
              <AD><ADTrigger className="ADTrigger">
              <h1>Задача: <i>посадить баобаб</i></h1>
              <h1>Проект: <i>Зеленая зона</i></h1>
              <h1>Время: <i>3 часа</i></h1></ADTrigger>
      <ADContent className="ADContent"> 
      <ADHeader className="ADHeader"><ADCancel className="ADCancel">×</ADCancel><ADTitle className="label">Задача: <b>посадить баобаб</b></ADTitle></ADHeader>
      <ADD className="ADD">
        Описание: Являясь всего лишь частью общей картины, стремящиеся вытеснить традиционное производство, нанотехнологии неоднозначны и будут указаны как претенденты на роль ключевых факторов.
      </ADD><ADD className="ADD"> Проект: <b>Баобабовые нанотехнологии</b>
      </ADD><ADD className="ADD"> Время на выполнения: <b>3 часа</b></ADD>
              </ADContent></AD>
              
              <AD><ADTrigger className="ADTrigger">
              <h1>Задача: <i>посадить баобаб</i></h1>
              <h1>Проект: <i>Зеленая зона</i></h1>
              <h1>Время: <i>3 часа</i></h1></ADTrigger>
      <ADContent className="ADContent"> 
      <ADHeader className="ADHeader"><ADCancel className="ADCancel">×</ADCancel><ADTitle className="label">Задача: <b>посадить баобаб</b></ADTitle></ADHeader>
      <ADD className="ADD">
        Описание: Являясь всего лишь частью общей картины, стремящиеся вытеснить традиционное производство, нанотехнологии неоднозначны и будут указаны как претенденты на роль ключевых факторов.
      </ADD><ADD className="ADD"> Проект: <b>Баобабовые нанотехнологии</b>
      </ADD><ADD className="ADD"> Время на выполнения: <b>3 часа</b></ADD>
              </ADContent></AD>
              
              <AD><ADTrigger className="ADTrigger">
              <h1>Задача:  <i>Разработать стратегию продвижения бренда</i></h1>
              <h1>Время: <i>334 часа</i></h1></ADTrigger>
      <ADContent className="ADContent"> 
      <ADHeader className="ADHeader"><ADCancel className="ADCancel">×</ADCancel><ADTitle className="label">Задача: <b> Разработать стратегию продвижения бренда</b></ADTitle></ADHeader>
      <ADD className="ADD">
        Описание: Создание эффективной стратегии продвижения бренда является ключевым фактором для достижения успеха в современном бизнесе. Необходимо провести анализ целевой аудитории, определить конкурентные преимущества бренда и разработать план действий, который позволит привлечь и удержать клиентов.
      </ADD><ADD className="ADD"> Проект: <b></b>
      </ADD><ADD className="ADD"> Время на выполнения: <b>336 часа</b></ADD>
              </ADContent></AD>
              </ScrollArea>
            </div>

            <div className="at_work">
            <h3>В работе</h3>
            <ScrollArea className="h-[500px]">
            <AD><ADTrigger className="ADTrigger">
              <h1>Задача: <i>Создание мобильного приложения для заказа еды</i></h1>
              <h1>Проект: <i>Еда онлайн</i></h1>
              <h1>Время: <i>216 часа</i></h1></ADTrigger>
      <ADContent className="ADContent"> 
      <ADHeader className="ADHeader"><ADCancel className="ADCancel">×</ADCancel><ADTitle className="label">Задача: <b>Создание мобильного приложения для заказа еды</b></ADTitle></ADHeader>
      <ADD className="ADD">
        Описание: Необходимо разработать мобильное приложение для заказа еды, которое будет включать в себя функциональность выбора ресторана, просмотра меню, оформления заказа и оплаты. Приложение должно быть удобным и интуитивно понятным для пользователей.
      </ADD><ADD className="ADD"> Проект: <b>Еда онлайн</b>
      </ADD><ADD className="ADD"> Время на выполнения: <b>2016 часа</b></ADD>
              </ADContent></AD>

              <AD><ADTrigger className="ADTrigger">
              <h1>Задача: <i>Создание логотипа для компании</i></h1>
              <h1>Проект: <i>Логотип для компании X</i></h1>
              <h1>Время: <i>14 часа</i></h1></ADTrigger>
      <ADContent className="ADContent"> 
      <ADHeader className="ADHeader"><ADCancel className="ADCancel">×</ADCancel><ADTitle className="label">Задача: <b>Создание логотипа для компании</b></ADTitle></ADHeader>
      <ADD className="ADD">
        Описание: Необходимо разработать логотип для компании, который будет отражать ее ценности и уникальность. Логотип должен быть запоминающимся и легко узнаваемым.
      </ADD><ADD className="ADD"> Проект: <b>Логотип для компании X</b>
      </ADD><ADD className="ADD"> Время на выполнения: <b>14 часа</b></ADD>
              </ADContent></AD>
              </ScrollArea></div>
          
            <div className="done">
            <h3>Сделано</h3>
            <ScrollArea className="h-[500px]">
            <AD><ADTrigger className="ADTrigger">
              <h1>Задача: <i>Написать текст для лендинга</i></h1>
              <h1>Проект: <i>Лендинг для продукта X</i></h1>
              <h1>Время: <i>5 часа</i></h1></ADTrigger>
      <ADContent className="ADContent"> 
      <ADHeader className="ADHeader"><ADCancel className="ADCancel">×</ADCancel><ADTitle className="label">Задача: <b>Написать текст для лендинга</b></ADTitle></ADHeader>
      <ADD className="ADD">
        Описание: Необходимо написать текст для лендинга, который будет описывать преимущества продукта или услуги и призывать к действию (например, к покупке или подписке). Текст должен быть информативным и убедительным.
      </ADD><ADD className="ADD"> Проект: <b>Лендинг для продукта X</b>
      </ADD><ADD className="ADD"> Время на выполнения: <b>5 часа</b></ADD>
              </ADContent></AD>

              <AD><ADTrigger className="ADTrigger">
              <h1>Задача: <i>Написать пост для социальных сетей</i></h1>
              <h1>Проект: <i>Пост для социальных сетей компании X</i></h1>
              <h1>Время: <i>1 часа</i></h1></ADTrigger>
      <ADContent className="ADContent"> 
      <ADHeader className="ADHeader"><ADCancel className="ADCancel">×</ADCancel><ADTitle className="label">Задача: <b>Написать пост для социальных сетей</b></ADTitle></ADHeader>
      <ADD className="ADD">
        Описание: Необходимо написать пост для социальных сетей, который будет привлекать внимание целевой аудитории и стимулировать ее к действию (например, к переходу на сайт или к покупке). Пост должен быть интересным, информативным и содержать призыв к действию.
      </ADD><ADD className="ADD"> Проект: <b>Пост для социальных сетей компании X</b>
      </ADD><ADD className="ADD"> Время на выполнения: <b>1 часа</b></ADD>
              </ADContent></AD>
              <AD><ADTrigger className="ADTrigger">
              <h1>Задача: <i>Написать текст для лендинга</i></h1>
              <h1>Проект: <i>Лендинг для продукта X</i></h1>
              <h1>Время: <i>5 часа</i></h1></ADTrigger>
      <ADContent className="ADContent"> 
      <ADHeader className="ADHeader"><ADCancel className="ADCancel">×</ADCancel><ADTitle className="label">Задача: <b>Написать текст для лендинга</b></ADTitle></ADHeader>
      <ADD className="ADD">
        Описание: Необходимо написать текст для лендинга, который будет описывать преимущества продукта или услуги и призывать к действию (например, к покупке или подписке). Текст должен быть информативным и убедительным.
      </ADD><ADD className="ADD"> Проект: <b>Лендинг для продукта X</b>
      </ADD><ADD className="ADD"> Время на выполнения: <b>5 часа</b></ADD>
              </ADContent></AD>

              <AD><ADTrigger className="ADTrigger">
              <h1>Задача: <i>Написать пост для социальных сетей</i></h1>
              <h1>Проект: <i>Пост для социальных сетей компании X</i></h1>
              <h1>Время: <i>1 часа</i></h1></ADTrigger>
      <ADContent className="ADContent"> 
      <ADHeader className="ADHeader"><ADCancel className="ADCancel">×</ADCancel><ADTitle className="label">Задача: <b>Написать пост для социальных сетей</b></ADTitle></ADHeader>
      <ADD className="ADD">Описание: Необходимо написать пост для социальных сетей, который будет привлекать внимание целевой аудитории и стимулировать ее к действию (например, к переходу на сайт или к покупке). Пост должен быть интересным, информативным и содержать призыв к действию.</ADD>
      <ADD className="ADD"> Проект: <b>Пост для социальных сетей компании X</b>
      </ADD><ADD className="ADD"> Время на выполнения: <b>1 часа</b></ADD>
      </ADContent></AD></ScrollArea>
            </div>       
          </div>


          <div className="footer">
            <div className="timet">
           <h1 className="time">Общее время: 400 часов</h1>
           <h1 className="time">Общее время: 230 часов</h1>
           <h1 className="time">Общее время: 12 часов</h1>
           </div>
          </div>
        </div>

      </div>

  );
}

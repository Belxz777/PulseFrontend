
import SearchIcon from "@/svg/SearchIcon";
import Link from "next/link";
export default function Home() {
  return (
<div className="flex flex-col h-screen">
      <header className=" bg-gray-900  text-white py-4 px-6 flex justify-between items-center rounded-md">
        <nav className="flex space-x-4">
          <Link className="hover:underline" href="/login">
  Логин
          </Link>
          <Link className="hover:underline" href="/registration">
  Регистрация
          </Link>
          <Link className="hover:underline" href="S">
Искать проект
          </Link>

        </nav>

      </header>
      <main className="flex-1">
        <span className="w-full h-full rounded-md bg-muted" />
      </main>
    </div>
  );
}
//для добавления компонента run pnpm dlx shadcn-ui@latest add ... component name
import { Outlet } from "react-router-dom";
import {
  CodeBracketIcon,
  HomeIcon,
  ChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export default function Root() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-6">
      <header className="col-span-1 sm:col-span-6 flex justify-between items-center m-1 p-2 bg-neutral-300 rounded-lg">
        <h1 className="font-bold text-2xl">Josh Markets</h1>
        <div className="flex">
          <a
            href="https://github.com/stars/joshbrusa/lists/joshmarkets"
            target="_blank"
          >
            <CodeBracketIcon className="h-8 w-8" />
          </a>
        </div>
      </header>
      <nav className="m-1 p-2 bg-neutral-300 rounded-lg">
        <a href="/" className="flex items-center">
          <HomeIcon className="h-6 w-6 m-2" />
          <p>Home</p>
        </a>
        <a href="/markets" className="flex items-center">
          <ChartBarIcon className="h-6 w-6 m-2" />
          <p>Markets</p>
        </a>
        <a href="/friends" className="flex items-center">
          <UserCircleIcon className="h-6 w-6 m-2" />
          <p>Friends</p>
        </a>
        <a href="/account" className="flex items-center">
          <Cog6ToothIcon className="h-6 w-6 m-2" />
          <p>Account</p>
        </a>
      </nav>
      <main className="col-span-1 sm:col-span-4 m-1 p-2">
        <Outlet />
      </main>
    </div>
  );
}

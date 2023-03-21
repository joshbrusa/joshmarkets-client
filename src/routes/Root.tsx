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
    <>
      <header className="sticky top-0 p-2 flex justify-between items-center bg-neutral-300">
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
      <div className="flex">
        <nav className="p-2 w-40 fixed h-screen bg-neutral-300">
          <a href="/" className="p-2 flex items-center">
            <HomeIcon className="h-6 w-6" />
            <p className="ml-2">Home</p>
          </a>
          <a href="/markets" className="p-2 flex items-center">
            <ChartBarIcon className="h-6 w-6" />
            <p className="ml-2">Markets</p>
          </a>
          <a href="/friends" className="p-2 flex items-center">
            <UserCircleIcon className="h-6 w-6" />
            <p className="ml-2">Friends</p>
          </a>
          <a href="/account" className="p-2 flex items-center">
            <Cog6ToothIcon className="h-6 w-6" />
            <p className="ml-2">Account</p>
          </a>
        </nav>
        <main className="ml-40 p-2">
          <Outlet />
        </main>
      </div>
    </>
  );
}

import { UserCircleIcon, CodeBracketIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Josh Markets</h1>
        <div className="flex">
          <UserCircleIcon className="h-8 w-8" />
          <a
            href="https://github.com/stars/joshbrusa/lists/joshmarkets"
            target="_blank"
          >
            <CodeBracketIcon className="h-8 w-8" />
          </a>
        </div>
      </div>
    </>
  );
}

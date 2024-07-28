import { Database } from "lucide-react";

export function Header() {
  return (
    <header className="flex gap-2 h-14 rounded items-center px-4 bg-zinc-800">
      <Database className="size-5 text-zinc-100" />
      <h1 className="text-zinc-100 font-medium text-lg">Dashboard</h1>
    </header>
  )
}
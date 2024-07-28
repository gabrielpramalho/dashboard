import { Aside } from "@/components/aside";
import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Header />

      <div className="grid grid-cols-dashboard p-2 gap-2 items-start">
        <Aside />
        
        <div className="bg-zinc-800 rounded p-2">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
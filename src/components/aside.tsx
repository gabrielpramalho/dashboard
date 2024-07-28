import { Package, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Aside() {
  const { pathname } = useLocation()

  return (
    <aside className="bg-zinc-800 rounded px-2 py-4">
      <nav className="flex flex-col gap-4">
        <Link to="/" className="flex gap-2 data-[current=true]:font-bold" data-current={pathname === '/'}>
          <Users className="size-5" /> 
          Clientes
        </Link>
        <Link to="/products" className="flex gap-2 data-[current=true]:font-bold"  data-current={pathname === '/products'}>
          <Package className="size-5" />
          Produtos
        </Link>
      </nav>
    </aside>
  )
}
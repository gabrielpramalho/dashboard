import { Trash } from "lucide-react";

import products from '@/json/products.json'
import { useState} from "react";
import { Pagination } from "@/components/pagination";
import { ItemsPerPageSwitcher } from "@/components/items-per-page-switcher";

export function Products() {
  const [page, setPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(10)


  const totalItems = products.length
  const items = products.slice((page * itemsPerPage), (itemsPerPage * page) + itemsPerPage)

  const totalPages = Math.ceil( totalItems / itemsPerPage)


  function handleDefineItemsPerPage(newValue: number) {
    if (newValue != 0 && newValue <= totalItems) {
      setItemsPerPage(newValue)
      setPage(0)
    }
  }

  function newPage(page: number) {
    setPage(page)
  }

  return (
    <>
      <table className="w-full text-sm text-left text-zinc-100">
        <thead>
          <tr className="border-b border-zinc-50 mb-2">
            <th className="py-2">Id</th>
            <th className="py-2">Name</th>
            <th className="py-2">Estoque</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {items.map(client => {
            return (
              <tr className="border-b border-zinc-600/50" key={client.id}>
                <td className="py-2">{client.id}</td>
                <td className="py-2">{client.name}</td>
                <td className="py-2">{client.quantity}</td>
                <td className="py-2">
                  <button>
                    <Trash className="size-4" />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="p-2 flex items-center justify-between">
        <div>
          <span className="text-xs text-zinc-400">Total de itens: {totalItems}</span>
        </div>

        <ItemsPerPageSwitcher 
          handleDefineItemsPerPage={handleDefineItemsPerPage}
          itemsPerPage={itemsPerPage}
        />

        <Pagination 
          page={page}
          handleSetNewPage={newPage}
          totalPages={totalPages}
        />
      </div>
  </>
  )
}
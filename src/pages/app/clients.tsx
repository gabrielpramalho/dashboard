import { ChevronLeft, ChevronRight, Filter, Trash } from "lucide-react";

import clients from '@/json/clients.json'
import { useState, type FormEvent } from "react";

export function Clients() {
  const [page, setPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const totalItems = clients.length
  const items = clients.slice((page * itemsPerPage), (itemsPerPage * page) + itemsPerPage)

  const totalPages = Math.round( totalItems / itemsPerPage)

  function handleChangePerPage(event: FormEvent<HTMLInputElement>) {
    const newValue = Number(event.currentTarget.value)

    if (newValue > 0) {
      setItemsPerPage(newValue)
    }
  }

  return (
    <>
      <table className="w-full text-sm text-left text-zinc-100">
        <thead>
          <tr className="border-b border-zinc-50 mb-2">
            <th className="py-2">Id</th>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {items.map(client => {
            return (
              <tr className="border-b border-zinc-600/50" key={client.id}>
                <td className="py-2">{client.id}</td>
                <td className="py-2">{client.name}</td>
                <td className="py-2">{client.email}</td>
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
        <div className="flex items-center gap-2">
          <button className="p-1.5 bg-zinc-700 rounded-lg hover:bg-zinc-600">
            <ChevronLeft className="size-4" />
          </button>
          
          {Array.from({ length: totalPages}, (_, i) => (
            <button 
              onClick={() => setPage(i)}
              className="p-1.5 bg-zinc-700 rounded-lg w-7 text-xs hover:bg-zinc-600"
            >
              {i+1}
            </button>
          ))}

          <button 
            onClick={() => setPage(page + 1)}
            className="p-1.5 bg-zinc-700 rounded-lg hover:bg-zinc-600"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
        <div>
          <input 
            type="number" 
            value={itemsPerPage} 
            onChange={handleChangePerPage}
            className="bg-zinc-700"
          />
          <button>
            <Filter className="size-4" />
          </button>
        </div>
      </div>
  </>
  )
}
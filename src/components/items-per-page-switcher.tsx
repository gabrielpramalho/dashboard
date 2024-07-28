import { Filter } from "lucide-react"
import { useState, type FormEvent } from "react"

interface ItemsPerPageSwitcherProps {
  handleDefineItemsPerPage(newValue: number): void
  itemsPerPage: number
}

export function ItemsPerPageSwitcher({ handleDefineItemsPerPage, itemsPerPage }: ItemsPerPageSwitcherProps) {
  const [newItemsPerPage, setNewItemsPerPage] = useState(itemsPerPage)

  function handleChangePerPage(event: FormEvent<HTMLInputElement>) {
    const newValue = Number(event.currentTarget.value)

    setNewItemsPerPage(newValue)
  }
  return(
    <div className="flex items-center gap-4">
      <span className="text-xs text-zinc-400">Defina a quantide de itens por página</span>
      <input 
        type="text" 
        value={newItemsPerPage} 
        onChange={handleChangePerPage}
        className="bg-zinc-700 p-1.5 text-center rounded-lg w-10"
      />
      <button 
        className="bg-zinc-700 p-2.5 text-center rounded-lg"
        onClick={() => handleDefineItemsPerPage(newItemsPerPage)}
        title="Filtrar"
      >
        <Filter className="size-4" />
      </button>
    </div>
  )
}
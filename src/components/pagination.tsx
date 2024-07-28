import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { ButtonPagination } from "./button-pagination";

interface PaginationProps {
  page: number
  totalPages: number
  handleSetNewPage(newPage: number): void
}

export function Pagination({ page, totalPages, handleSetNewPage }: PaginationProps) {
  return (
    <div className="flex items-center gap-2">
      <ButtonPagination
        disabled={page===0}
        onClick={() => handleSetNewPage(0)}
        title="Primeira Página"
      >
        <ChevronsLeft className="size-4" />
      </ButtonPagination>
      <ButtonPagination
        disabled={page===0}
        onClick={() => handleSetNewPage(page - 1)}
        title="Página Anterior"
      >
        <ChevronLeft className="size-4" />
      </ButtonPagination>
      
      {Array.from({ length: totalPages}, (_, i) => (
        <ButtonPagination 
          onClick={() => handleSetNewPage(i)}
          data-current={page == i}
          key={i}
          title={`Página ${i+1}`}
        >
          {i+1}
        </ButtonPagination>
      ))}

      <ButtonPagination 
        disabled={page === totalPages - 1}
        onClick={() => handleSetNewPage(page + 1)}
        title="Próxima Página"
      >
        <ChevronRight className="size-4" />
      </ButtonPagination>
      <ButtonPagination 
        disabled={page === totalPages - 1}
        onClick={() => handleSetNewPage(totalPages - 1)}
        title="Última Página"
      >
        <ChevronsRight className="size-4" />
      </ButtonPagination>
    </div>
  )
}
import type { ComponentProps } from "react";

interface ButtonPaginationProps extends ComponentProps<'button'> {}

export function ButtonPagination(props: ButtonPaginationProps) {
  return (
    <button 
      className="p-1.5 bg-zinc-700 rounded-lg w-7 text-xs  enabled:hover:bg-zinc-600 disabled:opacity-50 data-[current=true]:bg-zinc-500 data-[current=true]:font-bold" 
      {...props} 
    />
  )
}
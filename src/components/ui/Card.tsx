import type { KeyboardEvent } from "react"
import { cn } from "../../lib/cn"
import type { CardProps } from "../../types/content"

export const Card = ({ onClick, children, className }: CardProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      onClick()
    }
  }

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-lg border border-black/5 bg-zinc-100 transition-all duration-150 ease-out group-hover:scale-[1.02] hover:-translate-y-1 hover:bg-black/10 hover:shadow-lg hover:shadow-zinc-50/50 active:scale-[0.98] dark:border-white/5 dark:bg-zinc-900 dark:hover:bg-white/20 dark:hover:shadow-zinc-950/50",
        className,
      )}
    >
      {children}
    </div>
  )
}

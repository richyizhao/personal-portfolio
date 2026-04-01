import { Icon } from "@iconify/react"
import type { Badge as BadgeType } from "../../types/content"

export const Badge = ({ icon, name }: BadgeType) => {
  return (
    <div className="flex items-center gap-1 rounded-lg bg-zinc-200 px-2 py-1 dark:bg-zinc-800">
      <Icon icon={icon} className="h-4 w-4" />
      <span className="text-sm font-semibold text-zinc-800/80 dark:text-zinc-200/80">{name}</span>
    </div>
  )
}

import type { MouseEvent } from "react"
import { Icon } from "@iconify/react"
import type { ButtonProps } from "../../types/content"

const baseClassName =
  "btn inline-flex cursor-pointer items-center justify-center gap-1 rounded-lg border border-black/20 px-4 py-2 text-sm leading-none shadow-sm transition-colors duration-150 hover:bg-zinc-200/50 dark:border-white/20 dark:hover:bg-zinc-800/50"

export const Button = ({
  icon,
  label,
  link,
  onClick,
  className = "",
  children,
  type = "button",
}: ButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    onClick?.(event)
  }

  const content = (
    <>
      {icon ? <Icon icon={icon} className="text-base leading-none select-none" /> : null}
      {label ? <span>{label}</span> : null}
      {children}
    </>
  )

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`${baseClassName} ${className}`.trim()}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${baseClassName} ${className}`.trim()}
    >
      {content}
    </button>
  )
}

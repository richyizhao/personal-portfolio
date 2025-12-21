import { Icon } from "@iconify/react"

interface ButtonProps {
  icon?: string
  label?: string
  link?: string
  onClick?: () => void
  className?: string
}

const Button: React.FC<ButtonProps> = ({ icon, label, link, onClick, className }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer")
    }
    if (onClick) onClick()
  }

  return (
    <button
      onClick={handleClick}
      className={`${className || ""} btn inline-flex cursor-pointer items-center justify-center gap-1 rounded-lg border border-black/20 px-4 py-2 text-sm leading-none shadow-sm transition-colors duration-150 hover:bg-zinc-200/50 dark:border-white/20 dark:hover:bg-zinc-800/50`}
    >
      {icon && <Icon icon={icon} className="text-base leading-none select-none" />}
      {label && <span>{label}</span>}
    </button>
  )
}

export default Button

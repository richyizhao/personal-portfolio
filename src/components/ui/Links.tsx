import { Icon } from "@iconify/react"
import { linksData } from "../../data/data"
import { useTheme } from "../../hooks/useTheme"

export const Links = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className="flex gap-4 text-zinc-600 dark:text-zinc-400">
      <Icon
        icon={isDarkMode ? "ri:moon-fill" : "ri:sun-fill"}
        className="cursor-pointer fill-current text-3xl select-none hover:text-black dark:hover:text-white"
        onClick={toggleTheme}
      />

      {linksData.map((link) => (
        <a
          key={link.label}
          href={link.href}
          title={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon={link.icon}
            className="cursor-pointer fill-current text-3xl select-none hover:text-black dark:hover:text-white"
          />
        </a>
      ))}
    </div>
  )
}

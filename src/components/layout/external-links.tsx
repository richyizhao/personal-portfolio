import { Icon } from "@iconify/react"
import { useTheme } from "@/components/theme-provider"

type ExternalLinkItem = {
  href: string
  icon: string
}

type Props = {
  externalLinks: ExternalLinkItem[]
}

export const ExternalLinks = ({ externalLinks }: Props) => {
  const { theme, setTheme } = useTheme()

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex justify-center gap-4 text-sm lg:mt-auto lg:items-start lg:justify-normal">
      <button
        type="button"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="cursor-pointer text-3xl text-zinc-600 select-none hover:text-black dark:text-zinc-400 dark:hover:text-white"
        onClick={handleThemeToggle}
      >
        <Icon
          icon={theme === "dark" ? "ri:moon-fill" : "ri:sun-fill"}
          className="fill-current"
        />
      </button>

      {externalLinks.map(({ href, icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Icon
            icon={icon}
            className="cursor-pointer fill-current text-3xl text-zinc-600 select-none hover:text-black dark:text-zinc-400 dark:hover:text-white"
          />
        </a>
      ))}
    </div>
  )
}

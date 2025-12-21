import { useState, useEffect } from "react"
import { Icon } from "@iconify/react"
import linksData from "./../../assets/data/linksData"

const Links = () => {
  // Theme mode using localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme")
    if (saved) return saved === "dark"
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  // Save preference
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  return (
    <div className="flex gap-4 text-zinc-600 dark:text-zinc-400">
      <Icon
        icon={darkMode ? "ri:moon-fill" : "ri:sun-fill"}
        className="cursor-pointer fill-current text-3xl select-none hover:text-black dark:hover:text-white"
        onClick={() => setDarkMode((v) => !v)}
      />

      {linksData.map((link, index) => (
        <a
          key={index}
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

export default Links

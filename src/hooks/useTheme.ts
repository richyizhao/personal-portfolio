import { useEffect, useState } from "react"

const THEME_STORAGE_KEY = "theme"
const DARK_THEME_CLASS = "dark"

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return false
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)

  if (savedTheme) {
    return savedTheme === DARK_THEME_CLASS
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle(DARK_THEME_CLASS, isDarkMode)
    window.localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? DARK_THEME_CLASS : "light")
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode((currentTheme) => !currentTheme)
  }

  return {
    isDarkMode,
    toggleTheme,
  }
}

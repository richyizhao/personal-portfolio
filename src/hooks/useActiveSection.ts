import { useEffect, useRef, useState } from "react"

interface NavLinks {
  href: string
  label: string
}

interface GliderStyle {
  height: number
  top: number
}

const DEFAULT_GLIDER_STYLE: GliderStyle = {
  height: 0,
  top: 0,
}

export const useActiveSection = (items: NavLinks[]) => {
  const [activeSection, setActiveSection] = useState(items[0]?.href ?? "")
  const [gliderStyle, setGliderStyle] = useState<GliderStyle>(DEFAULT_GLIDER_STYLE)
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryA.boundingClientRect.top - entryB.boundingClientRect.top)

        if (visibleEntries.length === 0) {
          return
        }

        setActiveSection(`#${visibleEntries[0].target.id}`)
      },
      { threshold: 0.5 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const activeIndex = items.findIndex(({ href }) => href === activeSection)
    const activeItem = itemRefs.current[activeIndex]

    if (!activeItem) {
      return
    }

    setGliderStyle({
      height: activeItem.offsetHeight,
      top: activeItem.offsetTop,
    })
  }, [activeSection, items])

  return {
    activeSection,
    gliderStyle,
    itemRefs,
  }
}

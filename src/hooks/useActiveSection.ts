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
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    )

    if (sections.length === 0) {
      return
    }

    const updateActiveSection = () => {
      const viewportMiddle = window.innerHeight * 0.35

      const currentSection = sections.find((section, index) => {
        const rect = section.getBoundingClientRect()
        const nextSection = sections[index + 1]

        if (!nextSection) {
          return rect.top <= viewportMiddle
        }

        const nextRect = nextSection.getBoundingClientRect()
        return rect.top <= viewportMiddle && nextRect.top > viewportMiddle
      })

      if (currentSection) {
        setActiveSection(`#${currentSection.id}`)
      }
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
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

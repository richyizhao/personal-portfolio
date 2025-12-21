import { useEffect, useRef, useState } from "react"
import navbarData from "../../assets/data/navbarData"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("#about")
  const [gliderStyle, setGliderStyle] = useState({ height: 0, top: 0 })

  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section")

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length === 0) return

        const first = visible[0].target as HTMLElement
        setActiveSection(`#${first.id}`)
      },
      { threshold: 0.5 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const index = navbarData.findIndex((i) => i.href === activeSection)
    const el = itemRefs.current[index]

    if (el) {
      setGliderStyle({
        height: el.offsetHeight,
        top: el.offsetTop,
      })
    }
  }, [activeSection])

  return (
    <nav className="relative mb-16 flex-1 max-lg:hidden">
      <ul className="relative flex list-none flex-col p-2">
        {navbarData.map(({ href, label }, index) => {
          const isActive = activeSection === href

          return (
            <li key={href}>
              <a
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                href={href}
                className={`block p-4 text-xs font-bold transition-colors duration-300 ${
                  isActive
                    ? "text-black dark:text-white"
                    : "text-zinc-500 hover:text-black dark:hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          )
        })}

        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-px">
          <div
            className="glider absolute w-full bg-linear-to-b from-transparent via-zinc-500 to-transparent transition-all duration-300"
            style={{
              top: `${gliderStyle.top}px`,
              height: `${gliderStyle.height}px`,
            }}
          >
            <div className="absolute left-0 h-full w-[150px] bg-linear-to-r from-zinc-900/10 to-transparent dark:from-zinc-100/10" />
          </div>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar

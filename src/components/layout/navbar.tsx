import { useActiveSection } from "@/hooks/useActiveSection"

type NavbarItem = {
  href: string
  label: string
}

type Props = {
  navbarItems: NavbarItem[]
}

export const Navbar = ({ navbarItems }: Props) => {
  const { activeSection, gliderStyle, itemRefs } = useActiveSection(navbarItems)

  return (
    <nav className="relative flex-1 max-lg:hidden">
      <ul className="relative flex list-none flex-col">
        {navbarItems.map(({ href, label }, index) => {
          const isActive = activeSection === href
          return (
            <li key={href}>
              <a
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                href={href}
                className={`block px-6 py-4 text-xs font-bold transition-colors duration-300 ${
                  isActive
                    ? "text-black dark:text-white"
                    : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
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
            <div className="absolute left-0 h-full w-37.5 bg-linear-to-r from-zinc-900/10 to-transparent dark:from-zinc-100/10" />
          </div>
        </div>
      </ul>
    </nav>
  )
}

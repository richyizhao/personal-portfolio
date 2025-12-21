import Navbar from "../ui/Navbar"
import Links from "../ui/Links"

const Header = () => {
  return (
    <header className="sticky top-0 flex max-h-screen flex-[0.45] flex-col py-24 pl-12 max-lg:static max-lg:flex-col max-lg:gap-6 max-lg:py-16 max-lg:pb-0">
      <div className="mb-16 max-lg:mb-0">
        <h1 className="mb-4 text-5xl font-bold">Richard Y. Zhao</h1>
        <h2 className="mb-4 text-xl">Full Stack Developer</h2>
        <p>
          Forging websites & applications <br />
          for seamless user experience.
        </p>
      </div>

      <Navbar />
      <Links />
    </header>
  )
}

export default Header

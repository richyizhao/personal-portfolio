import About from "../../pages/About"
import Projects from "../../pages/Projects"
import Skills from "../../pages/Skills"

const Main = () => {
  return (
    <main className="flex flex-[0.55] flex-col pr-12 max-lg:p-12 max-lg:pt-0">
      <About />
      <Projects />
      <Skills />
    </main>
  )
}

export default Main

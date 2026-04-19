import { Navbar } from "@/components/layout/navbar"
import { ExternalLinks } from "@/components/layout/external-links"
import { AboutSection } from "@/sections/about-section"
import { ProjectsSection } from "@/sections/projects-section"
import { SkillsSection } from "@/sections/skills-section"
import { layoutData } from "@/data/data"

export const Layout = () => {
  const { navbarItems, externalLinks } = layoutData

  return (
    <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:flex-row lg:gap-6 lg:px-12">
      <header className="flex flex-[0.45] flex-col py-12 lg:sticky lg:top-0 lg:h-screen lg:py-24">
        <div>
          <div className="mb-4 lg:mb-24">
            <h1 className="mb-2 text-center text-5xl font-bold lg:text-start">
              Richard Y. Zhao
            </h1>
            <p className="text-center text-xl font-semibold lg:text-start">
              Software Developer
            </p>
            <p className="text-center text-zinc-600 lg:text-start dark:text-zinc-400">
              Forging robust websites & applications{" "}
              <span className="inline lg:block">
                for seamless user experience.
              </span>
            </p>
          </div>

          <Navbar navbarItems={navbarItems} />
        </div>

        <ExternalLinks externalLinks={externalLinks} />
      </header>

      <main className="flex-[0.55]">
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
    </div>
  )
}

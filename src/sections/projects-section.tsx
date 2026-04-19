import { useState } from "react"
import { ProjectsCard } from "@/components/projects-card"
import { ProjectsModal } from "@/components/projects-modal"
import { sectionsData } from "@/data/data"

export const ProjectsSection = () => {
  const { projects } = sectionsData
  const [selectedProjectTitle, setSelectedProjectTitle] = useState<
    string | null
  >(null)
  const selectedProject =
    projects.find((project) => project.title === selectedProjectTitle) ?? null

  return (
    <section id="projects" className="pt-12 lg:pt-24">
      <h2 className="mb-6 block text-3xl font-bold lg:hidden">Projects</h2>

      <div className="space-y-6">
        {projects.map(
          ({ title, description, codeLink, demoLink, imageSrc, imageAlt }) => (
            <ProjectsCard
              key={title}
              title={title}
              description={description}
              codeLink={codeLink}
              demoLink={demoLink}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              onClick={() => setSelectedProjectTitle(title)}
            />
          )
        )}
      </div>

      {selectedProject ? (
        <ProjectsModal
          open={Boolean(selectedProject)}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedProjectTitle(null)
            }
          }}
          title={selectedProject.title}
          features={selectedProject.features}
          techstackBadges={selectedProject.techstackBadges}
          codeLink={selectedProject.codeLink}
          demoLink={selectedProject.demoLink}
          imageSrc={selectedProject.imageSrc}
          imageAlt={selectedProject.imageAlt}
        />
      ) : null}
    </section>
  )
}

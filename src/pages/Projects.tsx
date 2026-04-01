import { useState } from "react"
import PlaceHolderImage from "../assets/placeholder.jpg"
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { Carousel } from "../components/ui/Carousel"
import { Modal } from "../components/ui/Modal"
import { SectionTitle } from "../components/ui/SectionTitle"
import { projectsData } from "../data/data"
import { cn } from "../lib/cn"
import type { Project } from "../types/content"

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="pt-24">
      <SectionTitle title="PROJECTS" />

      <div className="flex flex-col gap-8">
        {projectsData.map((project) => (
          <Card
            key={project.title}
            onClick={() => setSelectedProject(project)}
            className="flex gap-6"
          >
            <div className="basis-full p-6 md:basis-1/2 md:pr-0">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 mb-3 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                <Button
                  icon="mdi:github"
                  label="GitHub"
                  link={project.codeLink}
                  onClick={(event) => event.stopPropagation()}
                  className="bg-white dark:bg-black"
                />
                {project.demoLink ? (
                  <Button
                    icon="mdi:open-in-new"
                    label="Demo"
                    link={project.demoLink}
                    onClick={(event) => event.stopPropagation()}
                    className="bg-white dark:bg-black"
                  />
                ) : null}
              </div>
            </div>

            <div className="relative hidden basis-1/2 self-stretch overflow-hidden md:mt-6 md:block">
              <img
                className="absolute inset-0 h-full w-full rounded-tl-lg object-cover"
                src={project.image?.trim() ? project.image : PlaceHolderImage}
                alt={project.title}
              />
            </div>
          </Card>
        ))}

        {selectedProject && (
          <Modal
            onClose={() => setSelectedProject(null)}
            contentClassName={cn(
              "max-h-[90vh] max-w-4xl",
              "overflow-hidden rounded-lg bg-white shadow-xl dark:bg-black",
            )}
          >
            <div className="flex items-center justify-between p-6 shadow-sm shadow-zinc-200 dark:shadow-zinc-800">
              <h2 className="text-2xl font-bold max-sm:text-lg">{selectedProject.title}</h2>

              <div className="flex gap-6">
                <Button icon="mdi:github" label="GitHub" link={selectedProject.codeLink} />
                {selectedProject.demoLink ? (
                  <Button
                    icon="mdi:open-in-new"
                    label="Demo"
                    link={selectedProject.demoLink}
                  />
                ) : null}
                <Button icon="mdi:close" onClick={() => setSelectedProject(null)} />
              </div>
            </div>

            <div
              className={cn("hide-scrollbar overflow-y-auto p-6")}
              style={{ maxHeight: "calc(90vh - 80px)" }}
            >
              <div className="mb-6">
                <Carousel
                  slug={selectedProject.slug}
                  title={selectedProject.title}
                  fallbackImage={selectedProject.image}
                />
              </div>

              <div className="mb-6">
                <h3 className="mb-2 text-lg font-bold">Features:</h3>
                <ul className="ml-2 list-inside list-disc space-y-2">
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-bold">Technology:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.badge.map((tech) => (
                    <Badge key={tech.name} {...tech} />
                  ))}
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  )
}

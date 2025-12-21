import { useState } from "react"
import Card from "../components/ui/Card"
import Modal from "../components/ui/Modal"
import projectsData from "../assets/data/projectsData"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null)

  return (
    <section id="projects" className="pt-24">
      <h2 className="mb-6 font-bold lg:hidden">PROJECTS</h2>

      <div className="flex flex-col gap-8">
        {projectsData.map((project) => (
          <Card key={project.title} {...project} onClick={() => setSelectedProject(project)} />
        ))}

        {selectedProject && (
          <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
  )
}

export default Projects

import Button from "./Button"
import { type TechnologyProps } from "./Technology"
import Technology from "./Technology"

interface ModalProps {
  project: {
    title: string
    codeLink: string
    features: string[]
    technology: TechnologyProps[]
    image: string
  }
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-6 backdrop-blur-sm dark:bg-white/10">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl dark:bg-black">
        <div className="flex items-center justify-between p-6 shadow-sm shadow-zinc-200 dark:shadow-zinc-800">
          <h2 className="text-2xl font-bold max-sm:text-lg">{project.title}</h2>

          <div className="flex gap-6">
            <Button icon="mdi:github" label="GitHub" link={project.codeLink} />
            <Button icon="mdi:close" onClick={onClose} />
          </div>
        </div>

        <div
          className="hide-scrollbar overflow-y-auto p-6"
          style={{ maxHeight: "calc(90vh - 80px)" }}
        >
          <div className="mb-6 rounded-lg bg-zinc-200 dark:bg-zinc-800">
            <img
              src={project.image}
              alt={project.title}
              className="h-100 w-full rounded-lg object-contain"
            />
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-lg font-bold">Features:</h3>
            <ul className="ml-2 list-inside list-disc space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">Technology:</h3>
            <div className="flex flex-wrap gap-2">
              {project.technology.map((tech) => (
                <Technology key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

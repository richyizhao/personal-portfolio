import { Icon } from "@iconify/react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Placeholder from "@/assets/placeholder.jpg"

interface Props {
  title: string
  description: string
  codeLink?: string
  demoLink?: string
  imageSrc?: string
  imageAlt?: string
  onClick?: () => void
}

export const ProjectsCard = ({
  title,
  description,
  codeLink,
  demoLink,
  imageSrc,
  imageAlt,
  onClick,
}: Props) => {
  return (
    <Card
      key={title}
      className="grid gap-3 md:grid-cols-2"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <CardContent>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <div className="flex flex-wrap gap-3">
          {codeLink ? (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              onClick={(event) => event.stopPropagation()}
            >
              <Icon icon="mdi:github" />
              GitHub
            </a>
          ) : null}

          {demoLink ? (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
              onClick={(event) => event.stopPropagation()}
            >
              <Icon icon="mdi:open-in-new" />
              Demo
            </a>
          ) : null}
        </div>
      </CardContent>

      <div className="hidden pt-6 md:block">
        <img
          src={imageSrc || Placeholder}
          alt={imageAlt}
          className="h-full w-full object-cover shadow-lg"
        />
      </div>
    </Card>
  )
}

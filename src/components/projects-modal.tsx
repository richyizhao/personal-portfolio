import { Icon } from "@iconify/react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import Placeholder from "@/assets/placeholder.jpg"
import { cn } from "@/lib/utils"

interface TechstackBadge {
  name: string
  icon: string
}

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  features: string[]
  techstackBadges: TechstackBadge[]
  codeLink: string
  demoLink?: string
  imageSrc?: string
  imageAlt: string
}

export const ProjectsModal = ({
  open,
  onOpenChange,
  title,
  features = [],
  techstackBadges = [],
  codeLink,
  demoLink,
  imageSrc,
  imageAlt,
}: Props) => {
  if (!open) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="space-y-6 p-6">
            <div>
              <img
                src={imageSrc || Placeholder}
                alt={imageAlt}
                className="h-full w-full rounded-lg"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold">Features</h3>
              <ul className="space-y-3 text-base text-muted-foreground">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="ml-3 text-zinc-600 dark:text-zinc-400"
                    >
                      &bull;
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold">Techstack</h3>
              <div className="flex flex-wrap gap-2">
                {techstackBadges.map(({ name, icon }) => (
                  <Badge key={name} variant="secondary">
                    <Icon icon={icon} />
                    {name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold">Links</h3>
              <div className="flex flex-wrap gap-2">
                {codeLink ? (
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "text-sm"
                    )}
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
                    className={cn(buttonVariants({ size: "sm" }), "text-sm")}
                  >
                    <Icon icon="mdi:open-in-new" />
                    Demo
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

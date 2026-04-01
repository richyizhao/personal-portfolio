import type { MouseEvent, ReactNode } from "react"

export interface NavItem {
  href: string
  label: string
}

export interface LinkItem {
  href: string
  icon: string
  label: string
}

export interface Badge {
  icon: string
  name: string
}

export interface Project {
  title: string
  codeLink: string
  demoLink?: string
  description: string
  features: string[]
  badge: Badge[]
  image: string
  slug: string
}

export interface Skill {
  name: string
  icon: string
  className?: string
}

export interface SkillGroup {
  category: string
  skills: Skill[]
}

export interface ButtonProps {
  icon?: string
  label?: string
  link?: string
  onClick?: (event: MouseEvent<HTMLElement>) => void
  className?: string
  children?: ReactNode
  type?: "button" | "submit" | "reset"
}

export interface CardProps
{
  onClick: () => void
  children: ReactNode
  className?: string
}

export interface ModalProps {
  onClose: () => void
  children: ReactNode
  overlayClassName?: string
  contentClassName?: string
}

export interface SectionTitleProps {
  title: string
}

export interface GliderStyle {
  height: number
  top: number
}

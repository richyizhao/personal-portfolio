import type { SectionTitleProps } from "../../types/content"

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className="mb-6 font-bold lg:hidden">{title}</h2>
}

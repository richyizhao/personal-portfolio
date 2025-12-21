import Button from "./Button"
import PlaceHolderImage from "../../assets/images/placeholder-image.jpg"

interface CardProps {
  title: string
  description: string
  image?: string
  codeLink: string
  onClick: () => void
}

const Card: React.FC<CardProps> = ({ title, description, image, codeLink, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative flex cursor-pointer gap-6 overflow-hidden rounded-lg border border-black/5 bg-zinc-100 transition-all duration-150 ease-out group-hover:scale-[1.02] hover:-translate-y-1 hover:bg-black/10 hover:shadow-lg hover:shadow-zinc-50/50 active:scale-[0.98] dark:border-white/5 dark:bg-zinc-900 dark:hover:bg-white/20 dark:hover:shadow-zinc-950/50"
    >
      <div className="basis-full py-6 pl-6 md:basis-1/2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 mb-3 text-sm">{description}</p>
        <Button
          icon="mdi:github"
          label="GitHub"
          link={codeLink}
          className="bg-white dark:bg-black"
        />
      </div>

      <div className="relative hidden basis-1/2 pt-6 md:block">
        <img
          className="relative h-full max-h-60 w-full flex-1 object-cover"
          src={image?.trim() ? image : PlaceHolderImage}
          alt={title}
        />
      </div>
    </div>
  )
}

export default Card

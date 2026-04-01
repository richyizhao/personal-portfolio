import { useMemo, useState } from "react"
import { Icon } from "@iconify/react"
import { getProjectImages } from "../../utils/projectImages"

interface CarouselProps {
  slug: string
  title: string
  fallbackImage: string
}

export const Carousel = ({ slug, title, fallbackImage }: CarouselProps) => {
  const images = useMemo(() => {
    const matches = getProjectImages(slug)

    return matches.length > 0 ? matches : [fallbackImage]
  }, [fallbackImage, slug])

  const [carouselState, setCarouselState] = useState({ slug, currentIndex: 0 })
  const currentIndex =
    carouselState.slug === slug
      ? Math.min(carouselState.currentIndex, images.length - 1)
      : 0

  const goToPrevious = () => {
    setCarouselState((previousState) => {
      const previousIndex =
        previousState.slug === slug ? Math.min(previousState.currentIndex, images.length - 1) : 0

      return {
        slug,
        currentIndex: previousIndex === 0 ? images.length - 1 : previousIndex - 1,
      }
    })
  }

  const goToNext = () => {
    setCarouselState((previousState) => {
      const previousIndex =
        previousState.slug === slug ? Math.min(previousState.currentIndex, images.length - 1) : 0

      return {
        slug,
        currentIndex: previousIndex === images.length - 1 ? 0 : previousIndex + 1,
      }
    })
  }

  return (
    <div className="rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          className="h-full w-full rounded-lg object-contain"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute top-1/2 left-0 h-full -translate-y-1/2 cursor-pointer bg-black/20 font-semibold text-white transition hover:bg-black/30"
              aria-label="Previous image"
            >
              <Icon icon="iconamoon:arrow-left-2" className="text-7xl" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="absolute top-1/2 right-0 h-full -translate-y-1/2 cursor-pointer bg-black/20 font-semibold text-white transition hover:bg-black/30"
              aria-label="Next image"
            >
              <Icon icon="iconamoon:arrow-right-2" className="text-7xl" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {images.map((image, index) => {
            const isActive = index === currentIndex

            return (
              <button
                key={image}
                type="button"
                onClick={() => setCarouselState({ slug, currentIndex: index })}
                className={`cursor-pointer overflow-hidden rounded-md border transition ${
                  isActive
                    ? "border-zinc-900 dark:border-zinc-100"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
                aria-label={`View image ${index + 1}`}
                aria-pressed={isActive}
              >
                <img
                  src={image}
                  alt={`${title} thumbnail ${index + 1}`}
                  className="h-16 w-24 object-cover"
                />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

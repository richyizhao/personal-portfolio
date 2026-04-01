import { useEffect } from "react"
import { cn } from "../../lib/cn"
import type { ModalProps } from "../../types/content"

export const Modal = ({
  onClose,
  children,
  overlayClassName,
  contentClassName,
}: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-6 backdrop-blur-sm dark:bg-white/10",
        overlayClassName,
      )}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={cn(
          "relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl dark:bg-black",
          contentClassName,
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

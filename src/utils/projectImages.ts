const projectImages = import.meta.glob("../assets/projects/*/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
}) as Record<string, string>

const getImageOrder = (path: string) => {
  const filename = path.split("/").pop() ?? ""
  const [basename] = filename.split(".")
  const numericValue = Number.parseInt(basename, 10)

  return Number.isNaN(numericValue) ? Number.MAX_SAFE_INTEGER : numericValue
}

export const getProjectImages = (slug: string) =>
  Object.entries(projectImages)
    .filter(([path]) => path.includes(`/assets/projects/${slug}/`))
    .sort(([pathA], [pathB]) => getImageOrder(pathA) - getImageOrder(pathB))
    .map(([, image]) => image)

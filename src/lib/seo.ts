const siteName = "Richard Zhao Portfolio"
const pageTitle = "Richard Zhao | Software Developer"
const pageDescription =
  "Richard Y. Zhao is a full stack developer in Auckland, New Zealand building React, TypeScript, ASP.NET Core, PostgreSQL, Azure, and AI-powered applications."
const socialImagePath = "/personal-icon.jpg"

const upsertMetaTag = (
  attribute: "name" | "property",
  key: string,
  content: string
) => {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  )

  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(attribute, key)
    document.head.append(element)
  }

  element.setAttribute("content", content)
}

const upsertLinkTag = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`
  )

  if (!element) {
    element = document.createElement("link")
    element.setAttribute("rel", rel)
    document.head.append(element)
  }

  element.setAttribute("href", href)
}

export const applySeoMetadata = () => {
  const origin = window.location.origin
  const canonicalUrl = `${origin}/`
  const socialImageUrl = `${origin}${socialImagePath}`

  document.title = pageTitle

  upsertMetaTag("name", "description", pageDescription)
  upsertMetaTag("property", "og:title", pageTitle)
  upsertMetaTag("property", "og:description", pageDescription)
  upsertMetaTag("property", "og:site_name", siteName)
  upsertMetaTag("property", "og:url", canonicalUrl)
  upsertMetaTag("property", "og:image", socialImageUrl)
  upsertMetaTag("name", "twitter:title", pageTitle)
  upsertMetaTag("name", "twitter:description", pageDescription)
  upsertMetaTag("name", "twitter:image", socialImageUrl)
  upsertLinkTag("canonical", canonicalUrl)
}

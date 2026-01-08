import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sg-wm.ch"

  // Static pages
  const staticPages = [
    "",
    "/ueber-uns",
    "/dienstleistungen",
    "/dienstleistungen/finanzplanung",
    "/dienstleistungen/vorsorge-pensionierung",
    "/dienstleistungen/versicherungen",
    "/dienstleistungen/immobilien",
    "/dienstleistungen/nachlass-erbschaft",
    "/dienstleistungen/kmu",
    "/kontakt",
    "/erstgespraech",
    "/faq",
    "/ratgeber",
  ]

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/dienstleistungen") ? 0.8 : 0.6,
  }))
}

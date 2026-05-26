const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bhumitvaghela.dev";

export default function sitemap() {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

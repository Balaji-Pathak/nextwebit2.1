import type { MetadataRoute } from "next";

const themePages = [
  "vintage-luxury",
  "modern-premium",
  "minimal-elegance",
  "pro-office",
  "new-asthetic",
  "geo-abstract",
  "extreme-show",
  "custom-theme",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://nextwebit.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://nextwebit.in/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nextwebit.in/contact-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nextwebit.in/themes",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const dynamicThemePages: MetadataRoute.Sitemap = themePages.map(
    (theme) => ({
      url: `https://nextwebit.in/themes/${theme}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...staticPages, ...dynamicThemePages];
}
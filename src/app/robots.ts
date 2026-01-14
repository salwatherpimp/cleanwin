export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://cleanwin.vercel.app/sitemap.xml",
  };
}

import { BuilderContent } from "@builder.io/sdk";

interface StructuredDataProps {
  content: BuilderContent;
  url: string;
}

export function StructuredData({ content, url }: StructuredDataProps) {
  const data = content.data;

  // Website JSON-LD
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: data?.title || "Your Website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourwebsite.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourwebsite.com"}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Page JSON-LD
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data?.title || "Page",
    description: data?.description || "",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourwebsite.com"}${url}`,
    mainEntity: {
      "@type": "Article",
      headline: data?.title || "Page",
      description: data?.description || "",
      author: {
        "@type": "Organization",
        name: "Your Company Name",
      },
      publisher: {
        "@type": "Organization",
        name: "Your Company Name",
        logo: {
          "@type": "ImageObject",
          url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourwebsite.com"}/logo.png`,
        },
      },
      datePublished: data?.datePublished || new Date().toISOString(),
      dateModified: data?.lastUpdated || new Date().toISOString(),
    },
  };

  // Organization JSON-LD for homepage
  const organizationStructuredData =
    url === "/"
      ? {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Your Company Name",
          url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourwebsite.com",
          logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourwebsite.com"}/logo.png`,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+49-xxx-xxx",
            contactType: "customer service",
            availableLanguage: "German",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Your Street",
            addressLocality: "Your City",
            postalCode: "12345",
            addressCountry: "DE",
          },
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
      {organizationStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      )}
    </>
  );
}

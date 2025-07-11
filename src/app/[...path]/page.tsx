import { builder } from "@builder.io/react";
import { RenderBuilderContent } from "../../components/builder/RenderBuilderContent";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    path: string[];
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const urlPath = "/" + (resolvedParams.path?.join("/") || "");

  const content = await builder
    .get("page", {
      userAttributes: { urlPath },
    })
    .toPromise();

  if (!content) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    };
  }

  return {
    title: content.data?.title || "Page",
    description: content.data?.description || "",
    openGraph: {
      title: content.data?.title || "Page",
      description: content.data?.description || "",
      images: content.data?.image ? [content.data.image] : [],
    },
  };
}

// Generate static params for all Builder.io pages
export async function generateStaticParams() {
  const pages = await builder.getAll("page", {
    options: { noTargeting: true },
    omit: "data.blocks", // Only get URLs, not full content
  });

  return pages
    .map((page) => ({
      path: page.data?.url?.split("/").filter(Boolean) || [],
    }))
    .filter((params) => params.path.length > 0); // Exclude homepage (handled by app/page.tsx)
}

// Main page component
export default async function BuilderPage({ params }: PageProps) {
  const resolvedParams = await params;
  const urlPath = "/" + (resolvedParams.path?.join("/") || "");

  const content = await builder
    .get("page", {
      userAttributes: { urlPath },
    })
    .toPromise();

  if (!content) {
    notFound();
  }

  return <RenderBuilderContent content={content} model="page" />;
}

// Enable static generation with ISR
export const revalidate = 1;
export const dynamicParams = true; // Allow dynamic paths not in generateStaticParams

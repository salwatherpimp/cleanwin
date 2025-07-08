// src/pages/[[...slug]].tsx

import { builder, BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { GetStaticProps, GetStaticPaths } from "next";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import { Component, ReactNode } from "react";
import Layout from "../components/Layout";

class HydrationErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    if (error.message.includes("Hydration failed")) {
      console.warn("Hydration error caught and handled:", error.message);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.children;
    }
    return this.props.children;
  }
}

// Initialize Builder.io only if API key is available
const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
if (apiKey && apiKey !== "your-api-key-here") {
  builder.init(apiKey);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentApiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

  // If Builder.io is not configured, return null page
  if (!currentApiKey || currentApiKey === "your-api-key-here") {
    return {
      props: {
        page: null,
        isBuilderConfigured: false,
      },
      revalidate: 5,
    };
  }

  const slugParam = params?.slug;

  // If no slug params, this means it's trying to handle "/"
  // Return 404 to let index.tsx handle it
  if (!slugParam || slugParam.length === 0) {
    return {
      notFound: true,
    };
  }

  const pagePath =
    "/" + (Array.isArray(slugParam) ? slugParam.join("/") : slugParam);

  try {
    const page = await builder
      .get("page", {
        userAttributes: {
          urlPath: pagePath,
        },
      })
      .toPromise();

    return {
      props: {
        page: page || null,
        isBuilderConfigured: true,
      },
      revalidate: 5,
    };
  } catch (error) {
    console.error("Error fetching Builder.io page:", error);
    return {
      props: {
        page: null,
        isBuilderConfigured: true,
      },
      revalidate: 5,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

interface BuilderPage {
  data?: {
    title?: string;
    url?: string;
  };
}

interface CatchAllPageProps {
  page: BuilderPage | null;
  isBuilderConfigured: boolean;
}

export default function CatchAllPage({
  page,
  isBuilderConfigured,
}: CatchAllPageProps) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  if (!isBuilderConfigured) {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Builder.io Setup Required</title>
        </Head>
        <Layout>
          <div
            style={{
              padding: "2rem",
              textAlign: "center",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <h1>Builder.io Setup Required</h1>
            <p>
              To use this app, you need to configure your Builder.io API key.
            </p>
          </div>
        </Layout>
      </>
    );
  }

  if (!page && !isPreviewing) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{page?.data?.title || "Seite"}</title>
      </Head>
      <Layout>
        <HydrationErrorBoundary>
          <div suppressHydrationWarning>
            <BuilderComponent model="page" content={page || undefined} />
          </div>
        </HydrationErrorBoundary>
      </Layout>
    </>
  );
}

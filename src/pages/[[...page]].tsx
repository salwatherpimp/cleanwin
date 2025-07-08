// src/pages/[[...page]].tsx

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
      // This is a hydration error, which is expected with Builder.io
      console.warn("Hydration error caught and handled:", error.message);
    }
  }

  render() {
    if (this.state.hasError) {
      // Re-render only on client side
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

  const pageParam = params?.page;
  const pagePath =
    "/" + (Array.isArray(pageParam) ? pageParam.join("/") : pageParam || "");

  // Exclude homepage and specific routes that have dedicated pages
  const excludedPaths = ["/"];
  if (excludedPaths.includes(pagePath)) {
    return {
      notFound: true,
    };
  }

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
    // Still return isBuilderConfigured: true because API key is valid
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
  // Always return minimal paths and use fallback for dynamic generation
  // This ensures the build doesn't fail if Builder.io is not configured
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
}

export default function CatchAllPage({ page }: CatchAllPageProps) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  // Only show setup message if API key is completely missing or default value
  const currentApiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
  if (!currentApiKey || currentApiKey === "your-api-key-here") {
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
            <ol
              style={{
                textAlign: "left",
                maxWidth: "600px",
                margin: "2rem auto",
              }}
            >
              <li>
                Go to{" "}
                <a
                  href="https://builder.io/account/organization"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://builder.io/account/organization
                </a>
              </li>
              <li>Copy your API key</li>
              <li>
                Replace &lsquo;your-api-key-here&rsquo; in the .env.local file
                with your actual API key
              </li>
              <li>Restart the development server</li>
            </ol>
            <p>
              <em>
                Your API key should start with something like: a1b2c3d4e5f6...
              </em>
            </p>
          </div>
        </Layout>
      </>
    );
  }

  if (!page && !isPreviewing) {
    // If we have an API key but no content, show a welcome page instead of 404
    if (currentApiKey && currentApiKey !== "your-api-key-here") {
      return (
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Welcome</title>
          </Head>
          <Layout>
            <div
              style={{
                padding: "2rem",
                textAlign: "center",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              <h1>Welcome to Your App</h1>
              <p>
                Your Builder.io integration is set up! Create content in
                Builder.io to see it here.
              </p>
              <p>
                <a
                  href="https://builder.io/content"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0066cc", textDecoration: "underline" }}
                >
                  Go to Builder.io to create your first page →
                </a>
              </p>
            </div>
          </Layout>
        </>
      );
    }

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

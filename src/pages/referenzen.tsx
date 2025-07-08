// src/pages/referenzen.tsx - Builder.io Page

import { builder, BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { GetStaticProps } from "next";
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

// Initialize Builder.io
const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
if (apiKey && apiKey !== "your-api-key-here") {
  builder.init(apiKey);
}

export const getStaticProps: GetStaticProps = async () => {
  const currentApiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

  if (!currentApiKey || currentApiKey === "your-api-key-here") {
    return {
      props: { page: null },
      revalidate: 5,
    };
  }

  try {
    const page = await builder
      .get("page", {
        userAttributes: {
          urlPath: "/referenzen",
        },
      })
      .toPromise();

    return {
      props: { page: page || null },
      revalidate: 30,
    };
  } catch (error) {
    console.error("Error fetching Builder.io page:", error);
    return {
      props: { page: null },
      revalidate: 30,
    };
  }
};

interface BuilderPage {
  data?: {
    title?: string;
    url?: string;
  };
}

interface ReferenzenPageProps {
  page: BuilderPage | null;
}

export default function ReferenzenPage({ page }: ReferenzenPageProps) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const currentApiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
  if (!currentApiKey || currentApiKey === "your-api-key-here") {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Builder.io Setup Required</title>
        </Head>
        <Layout>
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Builder.io Setup Required</h1>
            <p>Please configure your Builder.io API key.</p>
          </div>
        </Layout>
      </>
    );
  }

  if (!page && !isPreviewing) {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Referenzen - CleanWin</title>
          <meta
            name="description"
            content="Kundenstimmen und Referenzen von CleanWin"
          />
        </Head>
        <Layout>
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Referenzen</h1>
            <p>Diese Seite kann in Builder.io erstellt werden.</p>
            <a
              href="https://builder.io/content"
              target="_blank"
              rel="noopener noreferrer"
            >
              Builder.io Content erstellen →
            </a>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{page?.data?.title || "Referenzen - CleanWin"}</title>
        <meta
          name="description"
          content="Kundenstimmen und Referenzen von CleanWin - Professionelle Reinigung in Winterthur"
        />
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

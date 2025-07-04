// src/pages/[[...page]].tsx

import { builder, BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { GetStaticProps, GetStaticPaths } from "next";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";

// Initialize Builder.io only if API key is available
const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
if (apiKey && apiKey !== "your-api-key-here") {
  builder.init(apiKey);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // If Builder.io is not configured, return null page
  if (!apiKey || apiKey === "your-api-key-here") {
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
        isBuilderConfigured: false,
      },
      revalidate: 5,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  // If Builder.io is not configured, return minimal paths
  if (!apiKey || apiKey === "your-api-key-here") {
    return {
      paths: ["/"],
      fallback: true,
    };
  }

  try {
    const pages = await builder.getAll("page", {
      options: { noTargeting: true },
    });

    return {
      paths: pages.map((page) => page.data?.url || "/"),
      fallback: true,
    };
  } catch (error) {
    console.error("Error fetching Builder.io pages:", error);
    return {
      paths: ["/"],
      fallback: true,
    };
  }
};

interface BuilderPage {
  data?: {
    title?: string;
    url?: string;
  };
}

interface CatchAllPageProps {
  page: BuilderPage | null;
  isBuilderConfigured?: boolean;
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

  // Show configuration message if Builder.io is not set up
  if (isBuilderConfigured === false) {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Builder.io Setup Required</title>
        </Head>
        <div
          style={{
            padding: "2rem",
            textAlign: "center",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <h1>Builder.io Setup Required</h1>
          <p>To use this app, you need to configure your Builder.io API key.</p>
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
      <BuilderComponent model="page" content={page || undefined} />
    </>
  );
}

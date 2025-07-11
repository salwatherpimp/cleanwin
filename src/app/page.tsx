import { builder } from "@builder.io/react";
import { RenderBuilderContent } from "../components/builder/RenderBuilderContent";

// Builder.io page data fetching
async function getBuilderContent() {
  const content = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/",
      },
    })
    .toPromise();

  return content;
}

export default async function HomePage() {
  const content = await getBuilderContent();

  // If no Builder.io content found, show setup page
  if (!content) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Builder.io Setup Complete!
            </h1>
            <p className="text-gray-600">
              Create your homepage in Builder.io Fusion to get started.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <h3 className="text-sm font-medium text-blue-800 mb-2">
                Next Steps:
              </h3>
              <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
                <li>
                  Go to{" "}
                  <a
                    href="https://builder.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    builder.io
                  </a>
                </li>
                <li>Create a new "page" model</li>
                <li>Set the URL path to "/"</li>
                <li>Design your homepage</li>
                <li>Publish and refresh this page</li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return <RenderBuilderContent content={content} model="page" />;
}

// Enable static generation for better performance
export const revalidate = 1; // ISR: revalidate every second in production

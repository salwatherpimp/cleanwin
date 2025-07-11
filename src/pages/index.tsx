import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [builderApiKey, setBuilderApiKey] = useState("");

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (builderApiKey) {
      // Store in localStorage for development
      localStorage.setItem("builder-api-key-temp", builderApiKey);
      alert(
        "API Key saved! Please update your .env.local file and restart the dev server.",
      );
    }
  };

  return (
    <>
      <Head>
        <title>Builder.io App Setup</title>
        <meta name="description" content="Configure your Builder.io app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Builder.io Setup Required
            </h1>
            <p className="text-gray-600">
              To use this app, you need to configure your Builder.io API key.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <h3 className="text-sm font-medium text-yellow-800 mb-2">
                Setup Instructions:
              </h3>
              <ol className="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
                <li>
                  Go to{" "}
                  <a
                    href="https://builder.io/account/organization"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    builder.io/account/organization
                  </a>
                </li>
                <li>Copy your API key</li>
                <li>Replace 'your-api-key-here' in .env.local</li>
                <li>Restart the dev server</li>
              </ol>
            </div>

            <form onSubmit={handleApiKeySubmit} className="space-y-3">
              <div>
                <label
                  htmlFor="apikey"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  API Key (temporary for testing):
                </label>
                <input
                  type="text"
                  id="apikey"
                  value={builderApiKey}
                  onChange={(e) => setBuilderApiKey(e.target.value)}
                  placeholder="Enter your Builder.io API key"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Save API Key
              </button>
            </form>

            <div className="text-xs text-gray-500 text-center">
              The API key will be saved temporarily. Update .env.local for
              permanent setup.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

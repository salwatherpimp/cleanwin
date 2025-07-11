export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Builder.io Setup Complete!
          </h1>
          <p className="text-gray-600">
            Your Next.js + Builder.io app is ready!
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-md p-4">
            <h3 className="text-sm font-medium text-green-800 mb-2">
              ✅ Successfully Configured:
            </h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• App Router (Next.js 15)</li>
              <li>• SSG + ISR for Builder.io</li>
              <li>• SEO optimization</li>
              <li>• Core Web Vitals optimization</li>
              <li>• Automatic sitemap generation</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
            <h3 className="text-sm font-medium text-blue-800 mb-2">
              Next Steps:
            </h3>
            <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
              <li>Add your Builder.io API key to .env.local</li>
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
              <li>Create content and start building!</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}

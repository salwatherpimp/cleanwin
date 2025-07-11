export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Test Page - Can you see this?
        </h1>
        <p className="text-xl text-blue-100">
          If you can see this, the server is working fine.
        </p>
        <div className="mt-8 bg-white text-blue-600 p-4 rounded-lg">
          <p>Server Status: ✅ Running</p>
          <p>Compilation: ✅ Successful</p>
          <p>Response: ✅ 200 OK</p>
        </div>
      </div>
    </div>
  );
}

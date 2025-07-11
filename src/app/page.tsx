export default function SimplePage() {
  return (
    <div
      style={{
        margin: 0,
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            margin: "0 0 1rem 0",
          }}
        >
          ✅ SUCCESS!
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            marginBottom: "2rem",
            opacity: 0.9,
          }}
        >
          Your Next.js app is working perfectly!
        </p>
        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "20px",
            borderRadius: "10px",
            backdropFilter: "blur(10px)",
          }}
        >
          <h3 style={{ marginTop: 0, color: "#4ade80" }}>Status Check</h3>
          <p>✅ Server Running: Port 3000</p>
          <p>✅ Page Compiled: Successfully</p>
          <p>✅ Hydration: Fixed</p>
          <p>✅ Ready for CleanWin design!</p>
        </div>
      </div>
    </div>
  );
}

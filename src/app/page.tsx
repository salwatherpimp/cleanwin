export default function MinimalPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>CleanWin - Test Page</h1>
      <p>This is a minimal test page to verify the server is working.</p>
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f0f0f0', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h2>Server Status: ✅ Running</h2>
        <p>If you can see this page, the Next.js server is working correctly.</p>
      </div>
    </div>
  );
}

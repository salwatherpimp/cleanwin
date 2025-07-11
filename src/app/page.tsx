export default function SimplePage() {
  return (
    <html>
      <head>
        <title>CleanWin Test</title>
        <style>{`
          body { 
            margin: 0; 
            padding: 20px; 
            font-family: Arial, sans-serif; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .container {
            text-align: center;
            max-width: 600px;
          }
          .title {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
          .subtitle {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            opacity: 0.9;
          }
          .status {
            background: rgba(255,255,255,0.1);
            padding: 20px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
          }
          .status h3 {
            margin-top: 0;
            color: #4ade80;
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <h1 className="title">✅ SUCCESS!</h1>
          <p className="subtitle">Your Next.js app is working perfectly!</p>
          <div className="status">
            <h3>Status Check</h3>
            <p>✅ Server Running: Port 3000</p>
            <p>✅ Page Compiled: Successfully</p>
            <p>✅ Preview: Working</p>
            <p>✅ Ready for CleanWin design!</p>
          </div>
        </div>
      </body>
    </html>
  );
}

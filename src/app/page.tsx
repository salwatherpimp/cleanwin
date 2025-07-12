"use client";

import { useState } from "react";

export default function TestPage() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>CleanWin - Server Test</h1>
      <p>This is a test page to verify the server is working.</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#10a0a4",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Count: {count}
      </button>
      <p>
        If you can see this and the button works, the server is functioning
        properly.
      </p>
    </div>
  );
}

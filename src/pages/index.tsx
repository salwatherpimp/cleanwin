import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>CleanWin - Home</title>
      </Head>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>CleanWin Homepage</h1>
        <p>Welcome to CleanWin - Professional Cleaning Services</p>
      </div>
    </>
  );
}

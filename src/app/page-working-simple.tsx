import Image from "next/image";
import PureHeroSection from "../components/PureHeroSection";
import ErrorBoundary from "../components/ErrorBoundary";

export default function SimplePage() {
  return (
    <ErrorBoundary>
      <div>
        <h1>CleanWin - Simple Page</h1>
        <p>Testing if basic page works without dynamic imports.</p>
        
        <PureHeroSection />
        
        <section style={{ padding: '50px 20px', textAlign: 'center' }}>
          <h2>Services</h2>
          <p>Professional cleaning services in Winterthur.</p>
        </section>
      </div>
    </ErrorBoundary>
  );
}

import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: "80px" }}>
        <style jsx global>{`
          /* Hide Builder.io's navigation header to prevent duplicates */
          [builder-content-id] header,
          [builder-model="page"] header {
            display: none !important;
          }
        `}</style>
        {children}
      </main>
    </>
  );
}

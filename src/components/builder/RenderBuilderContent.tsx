"use client";

import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { BuilderContent } from "@builder.io/sdk";

interface RenderBuilderContentProps {
  content: BuilderContent | null;
  model: string;
}

export function RenderBuilderContent({
  content,
  model,
}: RenderBuilderContentProps) {
  const isPreviewing = useIsPreviewing();

  // Show preview mode or 404 if no content
  if (!content && !isPreviewing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-gray-600">This page could not be found.</p>
        </div>
      </div>
    );
  }

  return <BuilderComponent model={model} content={content} />;
}

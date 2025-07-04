// Suppress hydration warnings in development for Builder.io
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const originalError = console.error;
  const originalWarn = console.warn;

  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      (args[0].includes("Hydration failed") ||
        args[0].includes("cannot be a descendant") ||
        args[0].includes("validateDOMNesting"))
    ) {
      // Suppress Builder.io hydration warnings
      return;
    }
    originalError.apply(console, args);
  };

  console.warn = (...args) => {
    if (
      typeof args[0] === "string" &&
      (args[0].includes("Hydration failed") ||
        args[0].includes("cannot be a descendant") ||
        args[0].includes("validateDOMNesting"))
    ) {
      // Suppress Builder.io hydration warnings
      return;
    }
    originalWarn.apply(console, args);
  };
}

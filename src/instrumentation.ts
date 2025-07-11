export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { registerOtel } = await import("@builder.io/hydration-overlay/next");
    registerOtel("cleanwin-app");
  }
}

This is a [Next.js](https://nextjs.org) project with [Builder.io](https://builder.io) integration.

## Builder.io Setup

**Important:** Before running the development server, you need to configure your Builder.io API key.

1. Go to [builder.io/account/organization](https://builder.io/account/organization)
2. Copy your API key
3. Open `.env.local` and replace `your-api-key-here` with your actual API key:
   ```
   NEXT_PUBLIC_BUILDER_API_KEY=your-actual-api-key-here
   ```

## Getting Started

First, install dependencies and run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Routes

- `/` - Setup page (if Builder.io API key is not configured)
- `/builder/*` - Builder.io managed pages (requires valid API key)

## File Structure

- `src/pages/index.tsx` - Homepage with setup instructions
- `src/pages/builder/[[...page]].tsx` - Builder.io catch-all route for dynamic pages
- `.env.local` - Environment variables (contains Builder.io API key)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

import type { AppProps } from 'next/app'
// import '../styles/globals.css' // Optional, nur wenn du globale Styles nutzt

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

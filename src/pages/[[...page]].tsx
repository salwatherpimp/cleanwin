// pages/[...page].tsx

import { builder, BuilderComponent, useIsPreviewing } from '@builder.io/react'
import { GetStaticProps, GetStaticPaths } from 'next'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

// ✅ API-Key aus .env.local (empfohlen von Builder.io)
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pagePath = '/' + (params?.page?.join('/') || '')
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: pagePath,
      },
    })
    .toPromise()

  return {
    props: {
      page: page || null,
    },
    revalidate: 5, // ISR: Seite alle 5 Sek. neu generieren, wenn aufgerufen
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await builder.getAll('page', {
    options: { noTargeting: true },
  })

  return {
    paths: pages.map((page) => page.data?.url || '/'),
    fallback: true, // Dynamisch generieren, wenn zur Build-Zeit nicht bekannt
  }
}

export default function CatchAllPage({ page }: { page: any }) {
  const router = useRouter()
  const isPreviewing = useIsPreviewing()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  if (!page && !isPreviewing) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    )
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{page?.data?.title || 'Seite'}</title>
      </Head>
      <BuilderComponent model="page" content={page} />
    </>
  )
}

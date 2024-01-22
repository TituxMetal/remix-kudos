import { cssBundleHref } from '@remix-run/css-bundle'
import { type LinksFunction, type MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError
} from '@remix-run/react'
import { type ReactNode } from 'react'

import tailwindStylesheetLink from '~/styles/tailwind.css'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwindStylesheetLink },
    ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])
  ]
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix Kudos App' },
    { name: 'charset', content: 'utf-8' },
    { name: 'description', content: 'Welcome to Remix Kudos App' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1' }
  ]
}

const Document = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  )
}

const App = () => {
  return (
    <Document>
      <main>
        <Outlet />
      </main>
    </Document>
  )
}

export const ErrorBoundary = () => {
  const error = useRouteError()

  console.error(error)

  return (
    <html lang='en'>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body className='flex min-h-screen flex-col items-center justify-center space-y-4'>
        <p className='text-3xl'>Whoops!</p>
        {isRouteErrorResponse(error) ? (
          <p>
            {error.status} - {error.statusText}
          </p>
        ) : error instanceof Error ? (
          <p>{error.message}</p>
        ) : (
          <p>Something happened!</p>
        )}
        <Scripts />
      </body>
    </html>
  )
}

export default App

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import tailwind from './tailwind.css'

export const links = () => [{ rel: 'stylesheet', href: tailwind }]

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1'
})

const App = () => (
  <html lang='en'>
    <head>
      <Meta />
      <Links />
    </head>
    <body>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV !== 'production' && <LiveReload />}
    </body>
  </html>
)

export default App

import { Navigation } from "../components/Navigation"
import '../styles/globals.css'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Diego Ramirez</title>
        <meta name="viewport" content="initial-scale=1"></meta>      <meta name="author" content="Diego Ramirez"/>
        <meta name="keywords" content="Diego, Ramirez, Portfolio, Front end, React"/>
      </head>
      <body>
        <Navigation/>
          {children}
      </body>
    </html>
  )
}

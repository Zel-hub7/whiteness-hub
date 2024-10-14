import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'WhitenessHub',
  description: 'Cosmetic Teeth Whitening Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

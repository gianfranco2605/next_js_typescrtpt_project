import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Flexibble',
  description: 'Showcaae and discover remarcable developer projects',
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
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

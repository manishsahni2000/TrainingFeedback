import Header from '@/components/Header'
import './globals.css'
import Providers from './Providers'

export const metadata = {
  title: 'MongoDB Training Feedback',
  description: 'This is Training Feedback Portal for MongoDB PS Team',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        <Providers>
        <Header />
        {children}
        </Providers>
       </body>
    </html>
  )
}

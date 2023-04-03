import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'PS Portal',
  description: 'This is Training Portal for MongoDB PS Team',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/*Header*/}

        <Header />
        {/*NavBar*/}

        {/*SearchBox*/}
        
        {children}</body>
    </html>
  )
}

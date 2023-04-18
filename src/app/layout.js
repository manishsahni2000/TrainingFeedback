import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import './globals.css'
import Providers from './Providers'

export const metadata = {
  title: 'PS Portal',
  description: 'This is Training Portal for MongoDB PS Team',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
           {/*Header*/}

        <Header />
        {/*NavBar*/}
        
        {/*SearchBox*/}
        
        {children}
       
        </Providers>
       </body>
    </html>
  )
}

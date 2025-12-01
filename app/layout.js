import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'Biathlon Pronos',
  description: 'Application de pronostics biathlon'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}

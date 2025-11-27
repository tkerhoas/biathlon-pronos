import './globals.css'

export const metadata = {
  title: 'Biathlon Pronos',
  description: 'Jeu de pronostics Biathlon'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

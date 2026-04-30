import './globals.css'

export const metadata = {
  title: 'Héctor Cuevas — Freelancer, Automatización, Research',
  description: 'Freelancer especializado en automatización con IA, investigación web y soporte administrativo. Disponible para trabajo remoto global.',
  keywords: 'freelancer, automatización, IA, research, admin support, Upwork, Panamá',
  openGraph: {
    title: 'Héctor Cuevas — Freelancer',
    description: 'Automatización, Research y Soporte Admin. Disponible para trabajo remoto global.',
    url: 'https://hectorcuevas.com',
    siteName: 'Héctor Cuevas',
    locale: 'es_PA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Héctor Cuevas — Freelancer',
    description: 'Automatización, Research y Soporte Admin.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

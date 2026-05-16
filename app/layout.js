import './globals.css'
import Script from 'next/script'

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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9TBZK9N5DD');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
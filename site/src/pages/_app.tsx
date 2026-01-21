import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useEffect } from 'react'

// Font imports
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/900.css"
import "@fontsource/noto-serif/400.css"

// Global styles
import "../styles/global.css"
import "../styles/site.css"
import "../styles/modal.css"

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Create modal root if it doesn't exist
    if (typeof document !== 'undefined' && !document.getElementById('modal-root')) {
      const modalRoot = document.createElement('div')
      modalRoot.id = 'modal-root'
      modalRoot.className = 'modal-root'
      document.body.appendChild(modalRoot)
    }
  }, [])

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-S88CFV5BYH`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S88CFV5BYH');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

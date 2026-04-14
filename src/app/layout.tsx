import Script from 'next/script'
import './globals.css'

// fonts

import { Open_Sans, Inter } from "next/font/google";

// 

import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// 

import { YandexMetrikaHit } from './yandex-metrika-hit'

// fonts

const OpenSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// redux

import ReduxProvider from "@/Redux/Provider";

// 


const YM_ID = process.env.NEXT_PUBLIC_YM_ID

// 

export const metadata = {
  title: 'Геоквиз',
  description: "Цифровой видеогид",
  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "geokviz",
  },
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/icons/icon-32x32.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <html lang="en">
        <head>
          <link rel="manifest" href="/manifest.json" />
        </head>
        <body className={`${OpenSans.className}, ${InterFont.className}`}>

              <Container>
                <ReduxProvider>
                    {children}
                </ReduxProvider>
              </Container>


        {YM_ID && (
          <>
            <Script id="yandex-metrika" strategy="afterInteractive">
              {`
                (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) return;
                  }
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(${YM_ID}, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
                });
              `}
            </Script>

            <noscript>
              <div>
                <img
                  src={`https://mc.yandex.ru/watch/${YM_ID}`}
                  style={{ position: 'absolute', left: '-9999px' }}
                  alt=""
                />
              </div>
            </noscript>

            <YandexMetrikaHit counterId={Number(YM_ID)} />
          </>
        )}

      </body>
      
    </html>



  );
}

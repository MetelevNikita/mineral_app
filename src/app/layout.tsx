
import type { Metadata } from "next";
import './globals.css'

// fonts

import { Open_Sans, Inter } from "next/font/google";

// 

import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// components

import InstalPrompts from "./InstalPrompts"

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



export const metadata: Metadata = {
  title: "GEOKVIZ APP START WEB",
  description: "NEW APP from GEOKVIZ",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    title: "GEOKVIZ APP 3.0",
    statusBarStyle: "black-translucent",
    startupImage: [
      {
        url: "/apple-touch-icon.png",
      },
    ]
  },

  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <html lang="en">
        <head>
          {/* Стандартная иконка для всех устройств */}
          <link rel="icon" href="/favicon.ico" />
          
          {/* Иконки для Apple devices - КРИТИЧЕСКИ ВАЖНО для iOS */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          
          {/* Дополнительные размеры для лучшей совместимости */}
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/apple-touch-icon-167x167.png"/>
    
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          
          {/* Мета-теги для iOS */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="GEOKVIZ APP IOS FROM LAYOUT" />
        </head>
        <body className={`${OpenSans.className}, ${InterFont.className}`}>

          <Container style={{padding: 0}}>
            <ReduxProvider>
                {children}
                {/* <InstalPrompts /> */}
            </ReduxProvider>
          </Container>
  
      </body>
    </html>



  );
}

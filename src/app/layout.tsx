
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
        url: "/apple-icon.png",
      },
    ]
  },
  icons: {
    icon: '/favicon.ico',
    apple: [
      {
        sizes: '180x180',
        url: '/apple-icon.png',
        type: 'image/png'
      }
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
          <link rel="icon" href="/favicon.ico" sizes="any"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
    
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

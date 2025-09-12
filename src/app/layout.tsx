
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
  title: "GEOKVIZ APP 3.0",
  description: "NEW APP from GEOKVIZ",
  manifest: "/manifest.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <html lang="en">
        <head>
          {/* PWA meta tags */}
          <meta name="application-name" content="GEOKVIZ APP 3.0" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="GEOKVIZ APP 3.0" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#000000" />
          
          {/* Icons */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.webmanifest" />
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

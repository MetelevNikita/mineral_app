
import type { Metadata, Viewport } from "next";
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


export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  viewportFit: "cover",   // для safe-area на iOS
  themeColor: '#000000',
};



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


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

export const metadata = {
  title: "GEOKVIZ APP START WEB",
  description: "NEW APP from GEOKVIZ",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "geokviz",
  },
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <html lang="en">
        <body className={`${OpenSans.className}, ${InterFont.className}`}>
          <head>
            <link rel="manifest" href="/manifest.json" />
          </head>

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

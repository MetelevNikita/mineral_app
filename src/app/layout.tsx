
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
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "GEOKVIZ APP 3.0",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    other: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

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

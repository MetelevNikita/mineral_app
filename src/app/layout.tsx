
import { PWAProvider } from "next-pwa-pack";
import './globals.css'

// fonts

import { Open_Sans, Inter } from "next/font/google";

// 

import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



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
          <PWAProvider>
              <Container>
                <ReduxProvider>
                    {children}
                </ReduxProvider>
              </Container>
          </PWAProvider>
      </body>
      
    </html>



  );
}

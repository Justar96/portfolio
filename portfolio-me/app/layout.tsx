import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Mono } from "next/font/google"
import { LoadingProvider } from "@/context/loading-context"
import LoadingWrapper from "@/components/loading-wrapper"
import "./globals.css"

// Load Space Mono font with both weights
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
})

// Load Inter as a secondary font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Personal MDR Terminal",
  description: "A personal website inspired by Lumon Industries MDR terminals",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${spaceMono.variable} ${inter.variable}`}>
        <LoadingProvider>
          <LoadingWrapper>{children}</LoadingWrapper>
        </LoadingProvider>
      </body>
    </html>
  )
}

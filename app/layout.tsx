import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next";

import "./globals.css"
import { Suspense } from "react"
import "tw-animate-css";

export const metadata: Metadata = {
  title: "Springbyte Software Services | Professional Web & Mobile App Development",
  description:
    "Expert software development services in Noida, India. Specializing in web development, mobile apps, and custom software solutions. Get professional, affordable, and scalable digital solutions.",
  keywords:
    "software development, web development, mobile app development, Noida, India, custom software, React, Next.js",
  authors: [{ name: "Springbyte Software Services" }],
  creator: "Springbyte Software Services",
  publisher: "Springbyte Software Services",
  openGraph: {
    title: "Springbyte Software Services | Professional Development",
    description: "Expert software development services with competitive pricing",
    url: "https://springbyte.com",
    siteName: "Springbyte Software Services",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" async></script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}


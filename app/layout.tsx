import ActionButtons from "@/components/ActionButtons";
import {MainProvider} from "@/shared/providers";
import { ThemeToggle } from "@/components/ui";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Authentication System",
  description: "Authentication system application"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
    <head>
      <meta property="og:title" content="The Rock" />
      <meta property="og:type" content="video.movie" />
      <meta property="og:url" content="https://auth.tosha-code.xyz/auth/login" />
      <meta property="og:image" content="https://files.catbox.moe/c1vkn8.png" />
      <title>Authentication System</title>
      <meta name="description" content="Authentication system application" />
    </head>
    <body className={`${spaceMono.variable} antialiased`}>
    <MainProvider>
      <ThemeToggle />
      <ActionButtons/>
        {children}
    </MainProvider>
    </body>
    </html>
  );
}

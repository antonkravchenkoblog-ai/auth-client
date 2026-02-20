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
    <html suppressHydrationWarning lang='en' className='dark'>
    <body className={`${spaceMono.variable} antialiased`}>
    <MainProvider>
      <ThemeToggle />
      <div className='relative flex min-h-screen flex-col'>
        <div className='flex h-screen w-full items-center justify-center px-4'>
          {children}
        </div>
      </div>
    </MainProvider>
    </body>
    </html>
  );
}

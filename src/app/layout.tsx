import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import Script from "next/script";
import ConditionalLayout from "@/components/ConditionalLayout";
import React,{ Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BTFD Web",
  description:
    "BTFD  Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflow: "auto", height: "100%" }}>
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={inter.className}
        style={{ overflow: "auto", height: "100%", margin: 0 }}
      >
         <Suspense fallback={
          <div className="h-screen bg-black w-full flex items-center justify-center">
         <div className="font-bold font-zk text-white">Please wait...</div>
          </div>
         }>
        <ConditionalLayout>
        <Providers>{children}</Providers></ConditionalLayout>
        </Suspense>
      </body>
    </html>
  );
}

"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/providers/auth-provider";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body className={inter.className}>{children}</body>
      </NextAuthSessionProvider>
    </html>
  );
}

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
        <body className={inter.className}>
          <main className="h-screen w-screen p-3 flex justify-center items-center bg-purple-200">{children}</main>
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}

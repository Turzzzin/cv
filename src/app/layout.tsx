'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { LoadingProvider } from "@/components/LoadingContext";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/data-logo.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <LoadingProvider>
          <Navbar />
          <main className={pathname === '/' ? '' : 'pt-20'}>{children}</main>
        </LoadingProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Yeseva_One } from "next/font/google";
import { Prata } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// Yeseva_One({
//   subsets: ['latin'],
//   display: 'swap',
// })

// Prata({
//   subsets: ['latin'],
//   display: 'swap',
// })

export const metadata: Metadata = {
  title: "Modern Perfume Shop",
  description: "experience the best experience of your life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

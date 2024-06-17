import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Visualnode",
  description: "On-chain Market Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

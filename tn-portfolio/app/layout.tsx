import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TN Portfolio",
  description: "This is the personal portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-cloud">
      <body className={inter.className}>
        <main className="flex flex-row h-screen mx-8 mt-8">
          <Navbar/>
          {children}
          </main>
      </body>
    </html>
  );
}

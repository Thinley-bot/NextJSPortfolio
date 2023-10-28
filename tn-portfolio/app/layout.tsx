import Navbar from "@/components/Navbar/page";
import "./globals.css";
import type { Metadata } from "next";

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
    <html lang="en" className="bg-cloud bg-fixed">
      <body className="flex flex-row h-screen scroll-smooth mx-8 mt-8">
        <Navbar />
       <main className="ml-[27%]">{children}</main>
      </body>
    </html>
  );
}

"use client";
import Navbar from "./Navbar/page";
import "./globals.css";
import type { Metadata } from "next";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineArrowRight } from "react-icons/ai";
import Chatbot from "@/components/chatbot";
import {Montserrat} from 'next/font/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showRiddle, setShowRiddle] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowRiddle(false);
    }, 9000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en" className="bg-cloud bg-fixed font-[Montserrat]">
      {showRiddle ? (
        <body className="h-screen w-screen">
          <main className="relative flex flex-row h-full items-center justify-center">
            <div className="text-center">
              <img
                src="/assets/img/bhutanking.png"
                alt="Cover Page king speech"
                className="h-72 w-72 mx-auto mb-6 "
              />
              <TypeAnimation
                sequence={[
                  `\"Technology is an indispensable tool that will be necessary to realize this aspiration of becoming a smart nation.\"`,
                  1000,
                  "",
                ]}
                speed={35}
                style={{
                  whiteSpace: "pre-line",
                  fontSize: "2em",
                  fontWeight: "bold",
                  fontFamily: "serif",
                  color: "orange", // Adjust the text color
                  height: "5",
                }}
              />
            </div>
            <div
              className="h-10 w-10 rounded-full bg-black bg-opacity-25 p-2 fixed bottom-2 animate-bounce cursor-pointer"
              onClick={() => setShowRiddle(false)}
            >
              <img
                src="/assets/svg/arrowright.svg"
                alt="Cover Page king speech"
                className="h-full w-full rounded-full"
              />
            </div>
          </main>
        </body>
      ) : (
        <body className="relative flex flex-row h-screen scroll-smooth mx-8 mt-8 ">
          <Navbar />
          <div className="fixed bottom-9 right-0 ">
            <Chatbot/>
          </div>
          <main className="ml-[27%]">{children}</main>
          
        </body>
      )}
    </html>
  );
}

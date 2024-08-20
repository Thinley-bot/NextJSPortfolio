"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/page";
import "./globals.css";
import { TypeAnimation } from "react-type-animation";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showRiddle, setShowRiddle] = useState(true);

  const path=usePathname();
  console.log(path,"This is the path.")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowRiddle(false);
    }, 9000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en" className="bg-cloud bg-fixed font-[Montserrat]">
         <head>
        {/* Embed your script here */}
        <script
          type="application/javascript"
          dangerouslySetInnerHTML={{
            __html: `
           (function(w,d,s,o,f,js,fjs){w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments);};(js=d.createElement(s)),(fjs=d.getElementsByTagName(s)[0]);js.id=o;js.src=f;js.async=1;js.referrerPolicy = "origin";fjs.parentNode.insertBefore(js,fjs);})(window,document,"script","copilot","https://script.copilot.live/v1/copilot.min.js?tkn=cat-i7os4zz5");
copilot("init",{})
            `,
          }}
        />
      </head>
      {showRiddle && path==="/Profile/" ?  (
        <body className="h-screen w-screen">
          <main className="relative flex flex-row h-full items-center justify-center">
            <div className="text-center">
              <img src="/assets/img/bhutanking.png" alt="Cover Page king speech" className="h-72 w-72 mx-auto mb-6" />
              <TypeAnimation
                sequence={[
                  `"Technology is an indispensable tool that will be necessary to realize this aspiration of becoming a smart nation."`,
                  1000,
                  "",
                ]}
                speed={35}
                style={{
                  whiteSpace: "pre-line",
                  fontSize: "2em",
                  fontWeight: "bold",
                  fontFamily: "serif",
                  color: "orange", 
                  height: "5",
                }}
              />
            </div>
            <div className="h-10 w-10 rounded-full bg-black bg-opacity-25 p-2 fixed bottom-2 animate-bounce cursor-pointer" onClick={() => setShowRiddle(false)}>
              <img src="/assets/svg/arrowright.svg" alt="Cover Page king speech" className="h-full w-full rounded-full" />
            </div>
          </main>
        </body>
      ) : (
        <body className="relative flex flex-row h-screen scroll-smooth mx-8 mt-8 ">
          <Navbar />
          <main className="ml-[27%]">{children}</main>
        </body>
      )}
    </html>
  );
}


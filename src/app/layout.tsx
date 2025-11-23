import type { Metadata } from "next"; 
import "./globals.css";
import SplashCursor from "@/components/SplashCursor";
import { geistMono, geistSans } from "@/fonts/fonts";



export const metadata: Metadata = {
  title: "CodeNexo - AI & Automation Solutions | Custom Software Development",
  description: "CodeNexo delivers AI-powered automation, full-stack web and app development, custom software solutions, and seamless API integrations. Transform your ideas into production-ready systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <SplashCursor/> */}
        
        {children}
      </body>
    </html>
  );
}

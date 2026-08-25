import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SES Engineering Pakistan",
  description: "SES Engineering Pakistan",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}
      >
      <body className="min-h-full flex flex-col overflow-x-hidden">
      <Header/>
        {children}

      <Footer/>
      </body>
    </html>
  );
}

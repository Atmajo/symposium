import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SUSTAINABLE TECHNOLOGIES -THE WAY FORWARD",
  description:
    "Organized by the CENTRE OF EXCELLENCE IN RENEWABLE ENERGY (CoERE) & BASIC SCIENCE AND HUMANITIES DEPARTMENT (BSH), IEM NEWTOWN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${inter.className} bg-gradient-to-t to-[#4EC9F5]/90 from-[#0C8040]/80`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

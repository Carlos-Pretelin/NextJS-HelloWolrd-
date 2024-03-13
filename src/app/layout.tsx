import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Menu</h1>
        <Link href={"/"}>Home</Link>
        <Link href={"/users/Carlos"}>Carlos</Link>
        <Link href={"/users/Jaro"}>Jaro</Link>
        HomePage
        {children}
        </body>
    </html>
  );
}

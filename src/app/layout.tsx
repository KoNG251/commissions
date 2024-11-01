import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from 'next/head';
import fav from '../../public/logo.ico'

const itim = localFont({
  src: "./fonts/Itim-Regular.woff",
  variable: "--font-itim-sans",
});


export const metadata: Metadata = {
  title: "commissions",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={fav.src} />
      </Head>
      <body
        className={`${itim.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

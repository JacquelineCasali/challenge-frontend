import type { Metadata } from "next";

import "./globals.css";
import { Saira } from 'next/font/google'
import Header from "@/components/header";
import { FilterContextProvider } from "@/context/filter-context";

const font = Saira({
  weight:['300','400','500','600'],
  subsets: ['latin'],
})

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
    <html lang="pt-Br">
      <body className={`${font.className}`}>
      <FilterContextProvider>
      <Header/>
      {children}
      </FilterContextProvider>
     
      </body>
    </html>
  );
}

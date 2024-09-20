import type { Metadata } from "next";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "GuestMifi",
  description: "A Mifi Rental Service",
};

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} text-base overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

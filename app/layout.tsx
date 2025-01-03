import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quick Loan",
  description: "Your accessible loan app",
  icons: [
    {
      url: "/quick-logo.svg",
      href: "/quick-logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${rubik.className} antialiased`}>{children}</body>
    </html>
  );
}

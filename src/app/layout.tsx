import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rapid Rabit",
  description: "Создано на next js",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head><link rel="icon" href="/rabit.svg" sizes="any" /></head>
      <body className={inter.className}   >
      <ThemeProvider>
      {children}
      </ThemeProvider>
      </body>
    </html>
  );
}

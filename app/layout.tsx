import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = localFont({
  src: './fonts/GeistVF.woff', // Substitua pelo caminho correto do arquivo de fonte no seu projeto
  variable: '--font-geist-sans', // Nome da variável CSS para a fonte
  weight: '100 900', // Intervalo de peso que a fonte suporta
});


export const metadata: Metadata = {
  title: "SimulaAi",
  description: "Crie simulados rápido e incríveis",
  icons: '/icons/logo.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}

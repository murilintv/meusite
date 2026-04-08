import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faixa from "@/components/Faixa";
import Nav from "@/components/Nav";
import ProdutoProvider from "@/context/ProdutoContext";
import CarrinhoProvider from "@/context/CarrinhoContext";
import ToastProvider from "@/context/ToastContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MineShop",
  description: "Uma loja virtual de Minecraft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastProvider>
          <Faixa />
          <Header />
          <ProdutoProvider>
            <CarrinhoProvider>
              <Nav />
              {children}
            </CarrinhoProvider>
          </ProdutoProvider>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}

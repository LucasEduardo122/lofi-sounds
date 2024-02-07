import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lofi Sounds",
  description: "Site para ouvir músicas lofi enquanto estuda/trabalha combinando com sons ambientes.",
  icons: [
    {
      url: './logo.png',
      type: 'image/png',
      rel: 'icon'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

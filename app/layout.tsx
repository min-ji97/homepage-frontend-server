import { ThemeProvider } from "@/providers/themeProvier";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import PlayerWrapper from "@/components/player/PlayerWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MINJI.log", 
  description: "민지의 포트폴리오 사이트입니다.",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar>{children}</Sidebar>
          <PlayerWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}



import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "PoliCheck — Transparencia Política con IA",
  description: "Verificamos el discurso político chileno con múltiples modelos de IA y la colaboración de la comunidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={GeistSans.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


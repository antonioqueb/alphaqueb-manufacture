import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Nabvar";
import Script from "next/script";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner"; // ⬅️ Importamos el nuevo componente

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Manufactura Inteligente | Alphaqueb Consulting",
  description:
    "Transformamos tu industria con tecnología avanzada: automatización, digitalización de procesos y software industrial. Conectamos tus sistemas para mejorar la producción y reducir errores en la manufactura.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans mx-6 xl:mx-8 2xl:mx-16`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WR7YX9PG6P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WR7YX9PG6P');
          `}
        </Script>

        {/* Theme Provider */}
        <ThemeProvider>
          <Navbar />
          {children}
          <Toaster />
          <CookieBanner />  {/* ⬅️ Agregamos la barra de cookies aquí */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

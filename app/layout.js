import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata = {
  title: "Alphaqueb — Consultoría estratégica para la industria",
  description: "Consultoría estratégica para retos de alta exigencia: manufactura compleja, comercio internacional, eventos masivos y cumplimiento ambiental.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400;500;700&family=Oxanium:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-WR7YX9PG6P" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WR7YX9PG6P');
          `}
        </Script>
        <ThemeProvider>
          <div className="aq-grid-bg" />
          <Navbar />
          <main className="aq-site-main">{children}</main>
          <Toaster />
          <CookieBanner />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

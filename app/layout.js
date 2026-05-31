import { Bebas_Neue, Roboto, Oxanium } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--aq-font-head",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--aq-font-body",
  display: "swap",
});

const oxanium = Oxanium({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--aq-font-tech",
  display: "swap",
});

export const metadata = {
  title: "Alphaqueb — Sistemas a la medida para operaciones complejas",
  description: "Desde Monterrey, implementamos y desarrollamos sistemas a la medida para empresas que ya crecieron más allá de sus sistemas actuales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`dark ${bebas.variable} ${roboto.variable} ${oxanium.variable}`}>
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

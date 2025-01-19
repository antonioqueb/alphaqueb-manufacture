import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import Navbar from "@/components/Nabvar";
import Script from "next/script";
import Footer from "@/components/Footer";

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
  title: "Servicios TI Manufactura - Alphaqueb Consulting",
  description:
    "Convertimos desafíos operativos en ventajas competitivas con soluciones personalizadas de automatización, digitalización y optimización. Reducimos costos hasta un 30%, aumentamos la productividad en un 40% y mejoramos la calidad de los productos para empresas manufactureras.",
};

export default function RootLayout({ children }) {
    const initialTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : 'system';
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans mx-6 xl:mx-8 2xl:mx-16`}
      >
        {/* Google Analytics */}
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-WR7YX9PG6P"
            strategy="afterInteractive" // Cargar después de la interacción del usuario
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WR7YX9PG6P');
            `}
          </Script>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        <Toaster />
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
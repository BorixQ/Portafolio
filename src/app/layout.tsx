import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Borix Quiroz | Físico, Científico de Datos & Ingeniero de Software",
  description:
    "Portafolio profesional de Borix Axel Quiroz Cruz. Ganador Global del NASA Space Apps Challenge 2025. Especialista en arquitecturas backend, sistemas IoT y procesamiento masivo de datos.",
  keywords: [
    "Borix Quiroz",
    "NASA Space Apps 2025",
    "Global Winner",
    "Físico",
    "Científico de Datos",
    "Backend Developer",
    ".NET 9",
    "Django",
    "PostgreSQL",
    "IoT",
    "Arequipa",
    "Perú",
  ],
  authors: [{ name: "Borix Axel Quiroz Cruz", url: "https://github.com/BorixQ" }],
  openGraph: {
    title: "Borix Quiroz | Físico & Ingeniero de Software Backend",
    description:
      "Ganador Global NASA Space Apps Challenge 2025. Arquitecturas backend, análisis de datos satelitales y sistemas IoT.",
    url: "https://github.com/BorixQ",
    siteName: "Borix Quiroz Portfolio",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#07090e] text-zinc-100 selection:bg-indigo-500/30 selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

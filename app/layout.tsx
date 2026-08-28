import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EcoMind — Consciência ambiental + tecnologia",
  description:
    "App EcoMind: calculadora de pegada, quiz ambiental, mapa de queimadas INPE e conscientização sobre desmatamento.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "EcoMind",
    statusBarStyle: "default",
  },
  icons: {
    icon: "/brand/icon-ecomind.png",
    apple: "/brand/icon-ecomind.png",
  },
  openGraph: {
    title: "EcoMind — Consciência ambiental + tecnologia",
    description:
      "Plante conhecimento. Cultive consciência. Junte-se à EcoMind.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full bg-atmosphere font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Bebas_Neue, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const ibm = IBM_Plex_Mono({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "REVEAL | Barbershop — Bourgoin-Jallieu & La Verpillière",
  description:
    "REVEAL — L'art du grooming moderne. Salons de coiffure premium pour hommes à Bourgoin-Jallieu et La Verpillière. Réservez votre expérience.",
  keywords: [
    "barbershop",
    "coiffeur",
    "barber",
    "grooming",
    "REVEAL",
    "Bourgoin-Jallieu",
    "La Verpillière",
    "salon homme",
    "barbier",
  ],
  openGraph: {
    title: "REVEAL | Barbershop — Bourgoin-Jallieu & La Verpillière",
    description:
      "Deux salons. Un style. Une expérience. L'art du grooming moderne au masculin.",
    type: "website",
    locale: "fr_FR",
    siteName: "REVEAL Barbershop",
  },
  twitter: {
    card: "summary_large_image",
    title: "REVEAL | Barbershop — Bourgoin-Jallieu & La Verpillière",
    description:
      "Deux salons. Un style. Une expérience. L'art du grooming moderne au masculin.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${bebas.variable} ${ibm.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

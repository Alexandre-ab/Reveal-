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
  title: "REVEAL | Barbershop",
  description:
    "REVEAL — L'art du grooming moderne. Un salon de coiffure premium pour hommes à Bourgoin-Jallieu. Réservez votre expérience.",
  keywords: [
    "barbershop",
    "coiffeur",
    "barber",
    "grooming",
    "REVEAL",
    "Bourgoin-Jallieu",
  ],
  openGraph: {
    title: "REVEAL | Barbershop",
    description:
      "Un lieu. Un style. Une expérience. L'art du grooming moderne au masculin.",
    type: "website",
    locale: "fr_FR",
    siteName: "REVEAL Barbershop",
  },
  twitter: {
    card: "summary_large_image",
    title: "REVEAL | Barbershop",
    description:
      "Un lieu. Un style. Une expérience. L'art du grooming moderne au masculin.",
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

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REVEAL | Barbershop",
  description:
    "REVEAL — L'art du grooming moderne. Un salon de coiffure premium pour hommes. Réservez votre expérience.",
  keywords: ["barbershop", "coiffeur", "barber", "grooming", "REVEAL", "Bourgoin-Jallieu"],
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
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

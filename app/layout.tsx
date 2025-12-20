import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OneClickWeb - Agence de Développement Web Premium",
  description: "Création de sites vitrines, e-commerce et applications web sur mesure. Développement web moderne et performant.",
  keywords: ["développement web", "création site internet", "e-commerce", "site vitrine", "agence web"],
  authors: [{ name: "OneClickWeb" }],
  openGraph: {
    title: "OneClickWeb - Agence de Développement Web Premium",
    description: "Création de sites vitrines, e-commerce et applications web sur mesure.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

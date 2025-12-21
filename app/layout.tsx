import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

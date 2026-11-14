import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "500", "700", "800"] });

export const metadata: Metadata = {
  title: "DZ Store Manager",
  description: "Gestion de magasin et de facturation pour le marché algérien"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="rtl">
      <body className={`${inter.className} ${tajawal.className}`}>{children}</body>
    </html>
  );
}

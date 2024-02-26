import type { Metadata } from "next";
import Provider from '@/provider/provider'
import "./globals.css";



export const metadata: Metadata = {
  title: "Appliz",
  description: "Appli for Friend Only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Provider>
      <body>{children}</body>
      </Provider>
    </html>
  );
}

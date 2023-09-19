import type { Metadata } from "next";
import "@styles/globals.css";
import { Nav } from "@components/Nav";
import { Footer } from "@components/Footer";

export const metadata: Metadata = {
  title: "Warung Skripsi & Tugas",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
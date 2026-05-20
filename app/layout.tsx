import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invitación Genaro",
  description: "Cumple de Genaro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

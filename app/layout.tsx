import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Markit.one - The Unified Marketing Stack",
  description: "Replace your fragmented stack with a single, powerful workspace for forms, QR codes, and video generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-electric selection:text-white">
        {children}
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site";
import "react-international-phone/style.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Happy Boy Company Limited",
  description: "A premier diversified corporation based in Accra, Ghana — spanning fashion, agriculture, real estate, electronics, automobile, energy, and mining.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow page-shell">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

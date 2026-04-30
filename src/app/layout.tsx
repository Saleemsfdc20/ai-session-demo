import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SalesforceChat } from "@/components/SalesforceChat";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salesforce Consulting | Boutique Solutions",
  description: "Premium Salesforce solutions, DevOps, and Agentforce consultancy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background">
        {children}
        <SalesforceChat />
      </body>
    </html>
  );
}

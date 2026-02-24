import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rare Coin | Claim, Stake, Trade on Base Chain",
  description: "Bot-proof claiming, staking rewards, lottery, and trading on Base Chain. Fair distribution with real utility.",
  keywords: ["crypto", "airdrop", "claim", "stake", "lottery", "Base Chain", "Rare Coin", "DeFi", "trading"],
  authors: [{ name: "Rare Coin Team" }],
  openGraph: {
    title: "Rare Coin | Claim, Stake, Trade on Base Chain",
    description: "Fair crypto distribution with bot-proof claiming and real utility on Base Chain.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    creator: "@RarifyApps",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

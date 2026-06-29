import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atomity - Cloud Optimization Platform",
  description: "Animated scroll-triggered section demonstrating cloud node optimization and real-time monitoring.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased bg-bg-primary text-text-primary selection:bg-accent-primary/30`} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

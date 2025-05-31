import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { MainLayout } from "@/components/layout/main-layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abraham Derese - Portfolio",
  description: "Computer Engineer and Software Developer specializing in AI, Cybersecurity, and Web Development",
  keywords: ["Software Development", "AI", "Cybersecurity", "Web Development", "Portfolio"],
  authors: [{ name: "Abraham Derese" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abrahamderese.com",
    title: "Abraham Derese - Portfolio",
    description: "Computer Engineer and Software Developer specializing in AI, Cybersecurity, and Web Development",
    siteName: "Abraham Derese Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abraham Derese - Portfolio",
    description: "Computer Engineer and Software Developer specializing in AI, Cybersecurity, and Web Development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

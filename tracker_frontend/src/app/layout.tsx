import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ConditionalAppShell from "@/components/app-shell/conditional-app-shell";
import { ErrorBoundary } from "@/components/error-boundary/error-boundary";
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
  title: "Exercise Tracker",
  description: "Plan, track, and analyze your training weeks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <ConditionalAppShell>{children}</ConditionalAppShell>
        </ErrorBoundary>
      </body>
    </html>
  );
}

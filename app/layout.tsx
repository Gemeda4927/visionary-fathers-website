import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Visionary Fathers Awakening Group",
  description:
    "Empowering fathers through mentorship, leadership development, and community transformation.",
  keywords: [
    "Visionary Fathers",
    "fathers empowerment",
    "leadership",
    "community development",
    "mentorship program",
  ],
  authors: [{ name: "Visionary Fathers Team" }],
  openGraph: {
    title: "Visionary Fathers Awakening Group",
    description:
      "Empowering fathers through mentorship, leadership development, and community transformation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-gray-900 antialiased flex flex-col">

        {/* Main App Wrapper */}
        <div className="flex-1 flex flex-col">
          {children}
        </div>

      </body>
    </html>
  );
}
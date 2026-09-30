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
  title: "Ajith S | Software Developer | .NET & React",
  description: "Portfolio of Ajith S, a Software Developer specializing in .NET, C#, ASP.NET, SQL Server, JavaScript and React.",
  keywords: ["Ajith S", "Software Developer", ".NET Developer", "C#", "ASP.NET", "SQL Server", "JavaScript", "React"],
  openGraph: {
    title: "Ajith S | Software Developer | .NET & React",
    description: "Portfolio of Ajith S, a Software Developer specializing in .NET, C#, ASP.NET, SQL Server, JavaScript and React.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajith S | Software Developer | .NET & React",
    description: "Portfolio of Ajith S, a Software Developer specializing in .NET, C#, ASP.NET, SQL Server, JavaScript and React.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
